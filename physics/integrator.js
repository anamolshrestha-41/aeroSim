//2d
const eulerStep = (state, ax, ay, dt) => {
    return {
        x: state.x + state.vx * dt,
        y: state.y + state.vy * dt,
        vx: state.vx + ax * dt,
        vy: state.vy + ay * dt
    }
}

//rotational
const eulerStepRot=(state, alpha, dt)=>{
    return{
        theta: state.theta + state.omega *dt,
        alpha: state.alpha + alpha * dt,
        radius: state.radius
    }
}

module.exports = eulerStep, eulerStepRot;