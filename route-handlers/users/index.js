const express = require('express');
const userscontroller = require('./controller');
const router = new express.Router();

router.route('/').get(userscontroller.getUsers);
router.route('/:userId').get(userscontroller.getUsersID);
router.route('/newuser').get(userscontroller.createUser);


module.exports = router;