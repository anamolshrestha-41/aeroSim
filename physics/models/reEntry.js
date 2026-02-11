const { airDensity } = require("./atmosphere");
const dragForce = require("./drag");
const gravityAcceleration = require("./gravity");

const simulateReentry=({
    mass, position0, velocity0, dt, maxTime, GM, Cd, area
})=>{
    let result=[];
    for(let t=0; t<=maxTime && position0.y > 0; t+=dt){
        const r= Math.sqrt(position0.x**2 + position0.y**2);
        const gravity= gravityAcceleration(position0, GM);
        const rho= airDensity(position0.y);
        const drag= dragForce(velocity0, rho, Cd, area);
        const a={
            x: gravity.x + drag.x/mass,
            y: gravity.y + drag.y/mass
        };
        velocity0={
            x: velocity0.x + a.x * dt,
            y: velocity0.y + a.y * dt
        };
        position0={
            x: position0.x + velocity0.x * dt,
            y: position0.y + velocity0.y * dt
        };
        const energy= 0.5 * (velocity0.x**2+velocity0.y**2)-GM/r;
        result.push({
            t, position: position0, velocity: velocity0, rho, energy
        })
    }
    return result
}
module.exports= simulateReentry;