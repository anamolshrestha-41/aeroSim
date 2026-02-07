import simulateProjectile from "../physics/models/Projectile";

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

