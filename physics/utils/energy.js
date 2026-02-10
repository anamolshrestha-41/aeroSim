const kineticEnergy=(mass, velocity)=>{
    const speedSquare= velocity.x**2 +velocity.y**2
    return 0.5 * mass * speedSquare
}

const gravitationalPE=(mass, gravity, height)=>{
    return mass * gravity * height
}

module.exports={kineticEnergy, gravitationalPE}