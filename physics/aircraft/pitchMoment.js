const rho0= 1.225

function pitchMoment(state, aircraft, deltaE){
    const V= state.speed
    const alpha= sate.theta

    const qBar= 0.5* rho * V * V

    const Cm= aircraft.Cm0+
    aircraft.Cmalpha* alpha + aircraft.Cmdelta* deltaE

    const M= qBar * aircraft.S * aircraft.c * Cm

    return M
}

module.exports= pitchMoment