const express= require("express");
const Simulation = require("../controllers/simulation");
const router= express.Router();

router.post("/test", Simulation.testRoute )
router.post("/projectile", Simulation.projectileRoute)
router.post("/force", Simulation.forceRoute)
router.post("/rotation", Simulation.rotationalRoute)
router.post("/energy", Simulation.energyRoute)
router.post("/orbit", Simulation.orbitRoute)

module.exports=router;