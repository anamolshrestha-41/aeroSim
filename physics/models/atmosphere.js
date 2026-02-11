const airDensity=(altitude)=>{
    const rho0=1.225;
    const H= 8500;
    return rho0 * Math.exp(-altitude/H);
};

module.exports={airDensity}
