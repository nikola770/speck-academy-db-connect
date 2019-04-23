const { Pool } = require('pg');

const pool = new Pool({
  user: 'nikolatr',
  host: '138.68.87.73',
  database: 'db_nikolatr',
  password: 'VfD~53N&',
  port: 5432,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}

