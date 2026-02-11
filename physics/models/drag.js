const dragForce=(velocity, rho, Cd, area)=>{
    const v= Math.sqrt(velocity.x**2+velocity.y**2);
    if(v===0) return {x: 0, y:0}

    const dragFrc=0.5 * rho * area* Cd * v**2;

    return{
        x: -dragFrc * (velocity.x/v ),
        y: -dragForce * (velocity.y / v)
    }
}
module.exports= dragForce;