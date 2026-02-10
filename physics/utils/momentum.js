const linearMomentum=(mass, velocity)=>{
    return{
        x: mass*velocity.x,
        y: mass*velocity.y
    }
}

const angularMomentum=(omega, mass, radius)=>{
    return mass* radius**2* omega
}

module.exports={linearMomentum, angularMomentum}