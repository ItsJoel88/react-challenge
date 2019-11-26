const router = require('express').Router()
const FavoriteController = require('../controllers/favorite')
const authenticate = require('../middlewares/authentication')
const authorize = require('../middlewares/authorization')

router.use(authenticate)


router.get('/', FavoriteController.getAll)

router.post('/', FavoriteController.create)

router.delete('/:id', authorize, FavoriteController.delete)


module.exports = router