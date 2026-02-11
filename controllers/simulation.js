import simulateProjectile from "../physics/models/Projectile";
import simulateForceMotion from "../physics/models/dynamics" 
import simulateWithEnergy from "../physics/models/forceEnergy";
import simulateOrbit from "../physics/models/orbit";
import simulateRotation from "../physics/models/rotation";

const Simulation= require("../models/simulation");
const eulerStep= require("../physics/integrator");

export const testRoute=async(req,res)=>{
    const {position, velocity, acceleration, time, dt}= req.body;
    const state={
        x: position,
        v: velocity
    }
    const result=[];

    for(let t=0; t<time; t+=dt){
        state=eulerStep(state, acceleration, dt);
        result.push({t, ...state});
    }

    const simulation = await Simulation.create({
        type: "test",
        input: req.body,
        output: result,
        timeStep: dt
    });
    res.status(200).json(simulation);
}

export const projectileRoute=async(req,res)=>{
    const {x0=0, y0=0, vx0, vy0, g=9.81, dt=0.01, maxTime=10}= req.body;
    if(vx0 === undefined || vy0 === undefined){
        return res.status(400).json({
            error: "Initial Velocity Required."
        })
    }
    const result= simulateProjectile({
        x0, y0, vx0, vy0, g, dt, maxTime
    })
    const simulation= await Simulation.create({
        type: "projectile",
        input: req.body,
        output: result,
        timeStep: dt
    })
    res.status(200).json(simulation);
}

export const forceRoute= async(req, res)=>{
    const{mass, force, x0=0, y0=0, vx0=0, vy0=0, dt=0.01, maxTime=10}= req.body;
    if(!mass || !force){
        return res.status(400).json({
            error: "Mass and forces required!!"
        })
    }
    const result = simulateForceMotion({
        x0, y0, vx0, vy0, force, mass, dt, maxTime
    })
    const simulation = await Simulation.create({
        type: "force-motion",
        input: req.body,
        output: result,
        timeStep: dt
    })
    res.status(200).json(simulation);
}

export const rotationalRoute=async(req,res)=>{
    const{radius, omega0, alpha=0, dt=0.01, maxTime=10}=req.body;

    const result= simulateRotation({
        radius,
        omega0,
        alpha, dt, maxTime
    })

    const simulation = await Simulation.create({
        type:"rotation",
        input: req.body,
        output: result,
        timeStep: dt
    })
    res.status(200).json(simulation)
}

export const energyRoute= async(req,res)=>{
const result= simulateWithEnergy(req.body);
const simulation= await Simulation.create({
    type: "energy",
    input: req.body,
    output: result,
    timeStep: req.body.dt
})
res.status(200).json(simulation)
}

export const orbitRoute=async(req,res)=>{
    const result= simulateOrbit(req.body);
    const simulation= await Simulation.create({
        type: "orbit",
        input: req.body,
        output: result,
        timeStep: req.body.dt
    })
    res.status(200).json(simulation)
}