const gravityAcceleration=(position, GM)=>{
    const r= Math.sqrt(position.x**2+position.y**2);
    const factor=-GM/(r**3);

    return{
        x: factor*position.x,
        y: factor*position.y
    }
}
module.exports=gravityAcceleration;