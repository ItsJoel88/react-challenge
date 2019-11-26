const { verify } = require('../helpers/jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        req.decode = verify(req.headers.token)
        next()
    } catch (err) {
        next(err)
    }
}