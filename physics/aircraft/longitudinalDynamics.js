const liftDrag = require('./aeroModel');
const thrustModel = require('./thrustModel');
const g = 9.81;

function update(state, aircraft, throttle, dt) {
  const { L, D } = liftDrag(state, aircraft);
  const T = thrustModel(throttle, aircraft);
  const W = aircraft.mass * g;

  const gamma = Math.atan2(state.vz, state.vx);

  const Fx = T - D * Math.cos(gamma);
  const Fz = L - W - D * Math.sin(gamma);

  const ax = Fx / aircraft.mass;
  const az = Fz / aircraft.mass;

  state.vx += ax * dt;
  state.vz += az * dt;

  state.x += state.vx * dt;
  state.z += state.vz * dt;

  return state;
}

module.exports = update;