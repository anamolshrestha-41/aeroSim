const {kineticEnergy, gravitationalPE}=require("../utils/energy")
const {linearMomentum}=require("../utils/momentum")

const simulateWithEnergy=({mass, force, position0, velocity0, gravity=9.81, dt, maxTime})=>{
    let result=[];
    for(let t=0; t<=maxTime; t+=dt){
        const netForce= Array.isArray(force)?
        force.reduce((sum,f)=>({
            x: sum.x+f.x,
            y: sum.y+f.y
        }), {x:0, y:0})
        : force;
    
        const a={
            x: netForce.x/mass,
            y: netForce.y/mass

        }
        velocity0={
            x: velocity0.x + a.x * dt,
            y: velocity0.y + a.y * dt
        }
        position0={
            x: position0.x + velocity0.x * dt,
            y: position0.y + velocity0.y * dt
        };

        const KE=kineticEnergy(mass, velocity0);
        const PE= gravitationalPE(mass, gravity, position0.y);
        const momentum= linearMomentum(mass, velocity0)

        result.push({
            t, position: position0, velocity: velocity0, KE, PE, totalEnergy: KE+PE, momentum
        })
    }
    return result
}

module.exports= simulateWithEnergy