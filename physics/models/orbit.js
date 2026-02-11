const gravityAcceleration = require("./gravity");

const simulateOrbit=({
    position0, velocity0, GM, dt, maxTime
})=>{
    let result=[];
    for(let t=0; t<=maxTime; t+=dt){
        const r= Math.sqrt(position0.x**2 + position0.y**2);
        const a= gravityAcceleration(position0, GM);
        velocity0={
            x: velocity0.x + a.x * dt,
            y: velocity0.y + a.y * dt
        }
        position0={
            x: position0.x + velocity0.x * dt,
            y: position0.y + velocity0.y * dt
        }
        const energy= 0.5 * (velocity0.x**2 + velocity0.y**2 )-GM/r; //e=1/2* v^2 -GM/r
        result.push({
            t, 
            position:position0,
            velocity: velocity0,
            r, energy
        })
    }
    return result
}
module.exports= simulateOrbit