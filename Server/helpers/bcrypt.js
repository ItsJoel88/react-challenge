const bcryptjs = require('bcryptjs')

module.exports = {
    hash(password) {
        return bcryptjs.hashSync(password, 10)
    },
    compare(password, hashed) {
        return bcryptjs.compareSync(password, hashed)
    }
}
