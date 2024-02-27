const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'ABfCy0jn2010',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'apdev'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};