const db = require('../../db/connect');

const getHalls = (req, res, next) => {
    db.query('SELECT * from halls', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}

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

const postHall = (req, res, next) => {
    
    db.query("INSERT INTO halls(hall_id, hall_name, hall_adress, size) VALUES (b549a50da7dd43ef8ab96fb6ef360666, 'Sportska dvorana', 'Potočka ulica 17', 400)", (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows) 
    });
}

const createHall = (req, res, next) => {
    const { hall_id, hall_name, hall_adress, size } = request.body
  
    db.post('INSERT INTO halls (hall_id, hall_name, hall_adress, size) VALUES ($1, $2, $3, $4)', [hall_id, hall_name, hall_adress, size], (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(201).send(`Hall added with name: ${result.hall_name}`)
    })
  }



module.exports = {
    getHalls,
    getHallByid,
    postHall,
    createHall
};

/*module.exports = {
    getIDHalls
};*/