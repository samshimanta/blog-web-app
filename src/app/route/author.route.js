const express = require('express');
const AuthorController = require('../controller/author.controller'); // Import the controller

const router = express.Router();

// Route to create a new author
router.post('/', AuthorController.create);

// Route to get all authors
router.get('/', AuthorController.findAll);

// Route to get an author by ID
router.get('/:id', AuthorController.findById);

// Route to update an author by ID
router.put('/:id', AuthorController.update);

// Route to delete an author by ID
router.delete('/:id', AuthorController.delete);

module.exports = router;