const aeroForces= (state, aircraft)=>{
    const {u, w}= state;
    const V= Math.sqrt(u**2+w**2);

    const rho= 1.225;
    const qBar= 0.5*rho*V**2;

    const Lift= qBar * aircraft.S * aircraft.CL;
    const Drag= qBar * aircraft.S * aircraft.CD;

    return{
        X: -Drag,
        Z: -Lift,
        M: aircraft.CM * qBar * aircraft.S * aircraft.c
    }
}
module.exports=aeroForces;