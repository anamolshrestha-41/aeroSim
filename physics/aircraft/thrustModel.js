function thrustModel(throttle, aircraft){
    return throttle * aircraft.maxThrust;
}

module.exports= thrustModel;