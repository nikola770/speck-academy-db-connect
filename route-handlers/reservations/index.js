const express = require('express');
const reservationscontroller = require('./controller');
const router = new express.Router();

router.route('/').get(reservationscontroller.getReservations);
router.route('/:reservationId').get(reservationscontroller.getReservationByid);
router.route('/newreservation').post(reservationscontroller.createReservaion);
router.route('/:idReser').put(reservationscontroller.updateReservation);
router.route('/:idReser2').delete(reservationscontroller.deleteReservation);
module.exports = router;