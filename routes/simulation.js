const express= require("express");
const Simulation = require("../controllers/simulation");
const router= express.Router();

router.post("/test", Simulation.testRoute )
router.post("/projectile", Simulation.projectileRoute)

module.exports=router;