const db = require('../../db/connect');

const getUsers = (req, res, next) => {
    db.query('SELECT * from users', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}

const getUsersID = (req, res, next) => {
    //console.log("bla,", req.params);
    const userId = req.params.userId;
    db.query('SELECT * from users where user_id = $1', [userId], (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}

const createUser = (req, res, next) => {
    const { user_id, first_name, last_name, email ,user_password } = req.body;
  
    db.query('INSERT INTO users (user_id, first_name, last_name, email ,user_password ) VALUES ($1, $2, $3, $4, $5)', [user_id, first_name, last_name, email ,user_password], (err, result) => {
      if (err) {
        return next(err);
      }
      res.send(result.rows)
    });
  }


module.exports = {
    getUsers,
    getUsersID,
    createUser
};