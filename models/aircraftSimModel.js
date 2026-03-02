const mongoose = require('mongoose');

const aircraftSimSchema = new mongoose.Schema({
  type: String,
  input: Object,
  output: Array,
  timeStep: Number,
  method: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AircraftSim', aircraftSimSchema);