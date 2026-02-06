const Simulation= require("../models/simulation");
const eulerStep= require("../physics/integrator")

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

