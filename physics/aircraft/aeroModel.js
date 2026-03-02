const rho=1.225;
function liftDrag(state, aircraft){
    const V= state.speed;
    const alpha= state.theta;

    const CL= aircraft.CL0+ aircraft.CLalpha*alpha;
    const CD= aircraf.CD0+ aircraft.k * CL * CL;

    const q= 0.5 * rho * V * V;;

    const L= q*aircraft.S * CL;
    const D= q* aircraft.S * CD;

    return {L, D};
}
module.exports=liftDrag