const db = require('../../db/connect');

const getUsers = (req, res, next) => {
    db.query('SELECT * from users', (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
}
/////////////////////////////////////////
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
///////////////////////////////////////////////////
const createUser = (req, res, next) => {
    const { user_id, first_name, last_name, email, user_password } = req.body;

db.query('INSERT INTO users (user_id, first_name, last_name, email, user_password) VALUES ($1, $2, $3, $4, $5)', 
[user_id, first_name, last_name, email, user_password], (err, result) => {
  if (err) {
    return next(err);
  }
  res.status(201).send(result.rows)
})
}
///////////////////////////////////////////////////////////////////////
const updateUser = (req, res, next) => {
const idUser = req.params.idUser;
const { first_name, last_name, email, user_password } = req.body

db.query(
  'UPDATE users SET first_name = $1, last_name = $2, email = $3, user_password = $4 WHERE user_id = $5',
  [first_name, last_name, email, user_password, idUser],
  (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).send(results.rows)
  });
}
///////////////////////////////////////////////////////////////////////////////
const deleteUser = (req, res, next) => {
//console.log("bla,", req.params);
const idUser2 = req.params.idUser2;

db.query('DELETE FROM users WHERE user_id = $1', [idUser2], (err, results) => {
  if (err) {
    throw err;
  }
  res.status(200).send(results.rows)
});
}


module.exports = {
    getUsers,
    getUsersID,
    createUser,
    updateUser,
    deleteUser
};