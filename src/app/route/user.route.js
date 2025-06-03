const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');

router.get('/', UserController.getAllUser);
router.get('/filter', UserController.getUsersByLocation);
router.post('/', UserController.createUser);

module.exports = router;