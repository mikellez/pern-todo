const Pool = require('pg').Pool;

const pool = new Pool({
 user: 'postgres',
 password: 'secret',
 host: 'localhost',
 port: 3306,
 database: 'perntodo'
});

module.exports = pool;