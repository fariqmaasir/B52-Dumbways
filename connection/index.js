const {Pool} = require('pg')

const dbPool = new Pool({
    user: postgres,
    database:'B52_PERSONAL_WEB',
    password: 'postgrespw',
    port: 32769
})

module.exports = dbPool