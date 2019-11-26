const User = require('../models/user')
const { compare } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jsonwebtoken')

class UserController {
    static register(req, res, next) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
            .then(user => {
                res.status(201).json(user)
            })
            .catch(next)
    }

    static login(req, res, next) {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) throw { status: 404, message: 'User not found' }
                else {
                    let valid = compare(req.body.password, user.password)
                    if (valid) {
                        let token = sign({ id: user._id })
                        res.status(200).json({ token, message: ' User logged in' })
                    }
                    else throw { status: 400, message: 'Wrong username/password' }
                }
            })
            .catch(next)
    }
}

module.exports = UserController
