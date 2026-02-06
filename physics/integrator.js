const eulerStep = (state, acceleration, dt) => {
    return {
        x: state.x + state.v * dt,
        v: state.v + acceleration * dt
    }
}
module.exports = eulerStep;