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
        let createObj = {
            name: req.body.name,
            image: req.body.image,
            user: req.decode.id,
            capital: req.body.capital
        }
        Favorite.findOneAndUpdate({ name: req.body.name }, createObj, { upsert: true })
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
