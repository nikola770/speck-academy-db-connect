const express = require('express');
const hallscontroller = require('./controller');
const router = new express.Router();

router.route('/').get(hallscontroller.getHalls);
router.route('/:hallId').get(hallscontroller.getHallByid);
router.route('/newhall').post(hallscontroller.createHall);
router.route('/:idHall').put(hallscontroller.updateHall);
router.route('/:idHall2').delete(hallscontroller.deleteHall);
module.exports = router;