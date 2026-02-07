const eulerStep = (state, ax, ay, dt) => {
    return {
        x: state.x + state.vx * dt,
        y: state.y + state.vy * dt,
        vx: state.vx + ax * dt,
        vy: state.vy + ay * dt
    }
}
module.exports = eulerStep;