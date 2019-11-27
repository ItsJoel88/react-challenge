const { verify } = require('../helpers/jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        if (!req.headers.token) throw { status: 403, message: 'You need to login first' }
        req.decode = verify(req.headers.token)
        next()
    } catch (err) {
        next(err)
    }
}