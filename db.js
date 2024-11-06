/** Database for lunchly */

const {Client} = require("pg");


const db = new Client({ user: 'postgres',
    host: 'localhost',
    database: 'lunchly',
    password: '9542005',
    port: 5432 });

db.connect();

module.exports = db;
