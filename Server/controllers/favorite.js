const Favorite = require('../models/favorite')

class FavoriteController {
    static getAll(req, res, next) {
        Favorite.find({ user: req.decode.id })
            .then(favorites => {
                res.status(200).json(favorites)
            })
            .catch(next)
    }

    static create(req, res, next) {
        Favorite.create({
            user: req.decode.id,
            image: req.body.image,
            name: req.body.name,
            capital: req.body.capital
        })
            .then(favorite => {
                res.status(201).json(favorite)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        Favorite.findByIdAndRemove(req.params.id)
            .then(result => {
                res.status(200).json({ message: ' Delete data success' })
            })
            .catch(next)
    }
}

module.exports = FavoriteController
