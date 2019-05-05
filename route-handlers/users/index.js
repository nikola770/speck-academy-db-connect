const express = require('express');
const userscontroller = require('./controller');
const router = new express.Router();

router.route('/').get(userscontroller.getUsers);
router.route('/:userId').get(userscontroller.getUsersID);
router.route('/newuser').post(userscontroller.createUser);
router.route('/:idUser').put(userscontroller.updateUser);
router.route('/:idUser2').delete(userscontroller.deleteUser);

module.exports = router;