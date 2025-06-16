
const express = require('express');
const router = express.Router();
const tutorialController = require("../controller/tutorial.controller");


    router.post("/", tutorialController.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorialController.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorialController.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorialController.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorialController.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorialController.delete);
  
    // Create a new Tutorial
    router.delete("/", tutorialController.deleteAll);
  

module.exports = router;