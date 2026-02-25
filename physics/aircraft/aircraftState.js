class AircraftState{
  constructor({x, z, u, w, theta, q}){
    this.x=x;
    this.z=z;
    this.u=u;
    this.w=w;
    this.theta=theta;
    this.q=q;
  }
}

module.exports= AircraftState;