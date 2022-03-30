const S = require('sequelize')

const db = new S('movie_db', null, null,{
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

module.exports = db