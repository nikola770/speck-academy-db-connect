const express = require('express');
const userscontroller = require('./controller');
const router = new express.Router();

router.route('/').get(userscontroller.getUsers);
router.route('/:userId').get(userscontroller.getUsersID);

module.exports = router;