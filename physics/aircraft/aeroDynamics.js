const aircraftDervivatives= (state, aircraft)=>{
    const {m ,Iy, g}= aircraft;

    const forces= aircraft.aeroModel(state, aircraft);

    const uDot= (forces.X/m)-g * Math.sin(state.theta);
    const wDot= (forces.Z/m)+g * Math.cos(state.theta);
    const qDot= forces.M/Iy;

    return{
        xDot: state.u,
        zDot: state.w,
        uDot, wDot, thetaDot: state.q,
        qDot
    }

}

module.exports=aircraftDervivatives;