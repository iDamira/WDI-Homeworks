const pg =    require('pg-promise')({});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_DATABASE,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS
};

const db =    pg(config);

module.exports = db;
