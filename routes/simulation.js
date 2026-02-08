const express= require("express");
const Simulation = require("../controllers/simulation");
const router= express.Router();

router.post("/test", Simulation.testRoute )
router.post("/projectile", Simulation.projectileRoute)
router.post("/force", Simulation.forceRoute)

module.exports=router;