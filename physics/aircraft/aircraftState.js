class AircraftState{
  constructor({x, z, vx, vy, theta=0}){
    this.x=x;
    this.z=z; //altitude
    this.vx=vx;
    this.vy=vy;
    this.theta=theta;
  }
  get speed(){
    return Math.sqrt(this.vx**2+this.vy**2);
  }
}

module.exports= AircraftState;