const mongoose= require("mongoose");
const { type } = require("os");

const Schema= mongoose.Schema;

const simulationSchema= new Schema({
    type:{
        type: String,
        required: true, // projectile, force, energy,...
    },
    input:{
        type: Object,
        required: true,
    },
    output:{
        type: Object,
        required: true,
    },
    timeStep:{
        type: Number,
        default: 0.1
    },
    method:{
        type: String,
        default: "Euler"
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

let Simulation= mongoose.model("Simulation", simulationSchema);
module.exports= Simulation;