const express= require("express");
const app= express();
const Simulation= require("./routes/simulation")

app.use(express.json());
app.use("/api/simulate", Simulation);

module.exports=app;