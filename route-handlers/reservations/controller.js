const db = require('../../db/connect');
//////////////////////////////////////////////////////////
const getReservations = (req, res, next) => {
    db.query('SELECT * from reservations', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
////////////////////////////////////////////////////////
const getReservationByid = (req, res, next) => {
    //console.log("bla,", req.params);
    const reservationId = req.params.reservationId;
    db.query('SELECT * from reservations where reservation_id = $1', [reservationId], (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
///////////////////////////////////////////////////////
const createReservaion = (req, res, next) => {
        const { reservation_id ,reservation_status, reservation_start, reservation_end , hall_id, users_user_id } = req.body;
  
    db.query('INSERT INTO reservations (reservation_id ,reservation_status, reservation_start, reservation_end , hall_id, users_user_id) VALUES ($1, $2, $3, $4, $5, $6)', 
    [reservation_id ,reservation_status, reservation_start, reservation_end , hall_id, users_user_id], (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(201).send(result.rows)
    })
  }
///////////////////////////////////////////////////////////////////////
const updateReservation = (req, res, next) => {
    const idReser = req.params.idReser;
    const { reservation_status, reservation_start, reservation_end  } = req.body
  
    db.query(
      'UPDATE reservations SET reservation_status = $1, reservation_start = $2, reservation_end = $3  WHERE reservation_id = $4',
      [reservation_status, reservation_start, reservation_end, idReser],
      (err, results) => {
        if (err) {
          throw err;
        }
        res.status(200).send(results.rows)
      });
  }
///////////////////////////////////////////////////////////////////////////////
  const deleteReservation = (req, res, next) => {
    //console.log("bla,", req.params);
    const idReser2 = req.params.idReser2;
  
    db.query('DELETE FROM reservations WHERE reservation_id = $1', [idReser2], (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).send(results.rows)
    });
  }


module.exports = {
    getReservations,
    getReservationByid,
    createReservaion,
    updateReservation,
    deleteReservation
};