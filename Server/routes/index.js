const router = require('express').Router()
const User = require('./user')
const Favorite = require('./favorite')

router.use('/users', User)

router.use('/favorites', Favorite)


module.exports = router