const eulerStepRot= require("../integrator");

const simulateRotation=({
    radius, omega0, alpha=0, dt, maxTime
})=>{
    let state={
        theta:0,
        omega: omega0,
        radius: radius
    }
    let result=[];
    for(let t=0; t<=maxTime; t+=dt){
        result.push({
            t,
            theta: state.theta,
            omega: state.omega,
            postion:{
                x:state.radius*Math.cos(state.theta),
                y: state.radius*Math.sin(state.theta)
            },
            centripetalAccln: (state.omega**2)*state.radius,
            tangentialAccln: alpha,
        });
        state= eulerStepRot(state, alpha, dt)
    }
    return result
}

module.exports=simulateRotation;