const db = require('../../db/connect');
//////////////////////////////////////////////////////////
const getHalls = (req, res, next) => {
    db.query('SELECT * from halls', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
////////////////////////////////////////////////////////
const getHallByid = (req, res, next) => {
    //console.log("bla,", req.params);
    const hallId = req.params.hallId;
    db.query('SELECT * from halls where hall_id = $1', [hallId], (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
///////////////////////////////////////////////////////
const createHall = (req, res, next) => {
        const { hall_id, hall_name, hall_adress, size } = req.body;
  
    db.query('INSERT INTO halls (hall_id, hall_name, hall_adress, size) VALUES ($1, $2, $3, $4)', 
    [hall_id, hall_name, hall_adress, size], (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(201).send(result.rows)
    })
  }
///////////////////////////////////////////////////////////////////////
const updateHall = (req, res, next) => {
    const idHall = req.params.idHall;
    const { hall_name, hall_adress, size } = req.body
  
    db.query(
      'UPDATE halls SET hall_name = $1, hall_adress = $2, size = $3 WHERE hall_id = $4',
      [hall_name, hall_adress, size, idHall],
      (err, results) => {
        if (err) {
          throw err;
        }
        res.status(200).send(results.rows)
      });
  }
///////////////////////////////////////////////////////////////////////////////
  const deleteHall = (req, res, next) => {
    console.log("bla,", req.params);
    const idHall2 = req.params.idHall2;
  
    db.query('DELETE FROM halls WHERE hall_id = $1', [idHall2], (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).send(results.rows)
    });
  }


module.exports = {
    getHalls,
    getHallByid,
    createHall,
    updateHall,
    deleteHall
};