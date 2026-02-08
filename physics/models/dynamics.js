const eulerStep= require("../integrator");

const simulateForceMotion=({
    x0, y0, vx0, vy0, force, mass, dt, maxTime
})=>{
let state={
    x: x0,
    y: y0,
    vx:vx0,
    vy: vy0
}
const result=[];
for(let t=0; t<=maxTime; t+=dt){
    let Fx=0;
    let Fy=0;
    force.forEach(f=>{
        Fx+=f.fx;
        Fy+=f.fy;
    })
    const ax= Fx/mass;
    const ay= Fy/mass;
    result.push({t, ...state, ax, ay})
    state= eulerStep(state, ax, ay, dt)
}
return result;
}
module.exports=simulateForceMotion;