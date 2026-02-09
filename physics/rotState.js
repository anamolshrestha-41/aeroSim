export class rotState{
    constructor(theta=0, omega=0, radius=1){
        this.theta=theta,
        this.omega=omega,
        this.radius=radius
    }
    get position(){
        return{ //x=rcostheta, y=rsintheta
            x: this.radius * Math.cos(this.theta),
            y: this.radius * Math.sin(this.theta)
        }
    }
}