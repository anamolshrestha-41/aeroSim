const eulerStep= require("../integrator");

 const simulateProjectile=({x0, y0, vx0, vy0, g, dt, maxTime})=>{
const state={
    x: x0,
    y: y0,
    vx: vx0,
    vy: vy0
}
const result=[];
const t=0;
while(state.y>=0 && t<=maxTime){
    result.push({t, ...state});
    state=eulerStep(state, 0, -g, dt);
    t+=dt;
}
return result;
}
module.exports= simulateProjectile;