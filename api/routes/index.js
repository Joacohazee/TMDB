const express = require("express")
const router = express.Router()
const routeUser = require('./users')

router.use('/', routeUser)



module.exports = router
