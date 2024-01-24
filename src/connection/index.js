const {Pool} = require('pg')

const dbPool = new Pool({
    user: 'postgres',
    database:'B52_PERSONAL_WEB',
    password: 'root',
    port: 5432
})

module.exports = dbPool