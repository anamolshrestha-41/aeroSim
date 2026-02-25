
const simulateAircraft=({
    initialState, aircraft, dt, maxTime
})=>{
    let state= initialState;
    let result=[];
    for(let t=0; t<=maxTime; t+=dt){
        const d= aircraft.aircraftDerviatives(state, aircraft);
        state={
      x: state.x + d.x_dot * dt,
      z: state.z + d.z_dot * dt,
      u: state.u + d.u_dot * dt,
      w: state.w + d.w_dot * dt,
      theta: state.theta + d.theta_dot * dt,
      q: state.q + d.q_dot * dt,
        };
        result.push({t, ...state})
    }
    return result;
}