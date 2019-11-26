const jwt = require('jsonwebtoken')

module.exports = {
    sign(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 60 })
    },
    verify(token) {
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}
