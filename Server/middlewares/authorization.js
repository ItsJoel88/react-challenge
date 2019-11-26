const Favorite = require('../models/favorite')

module.exports = (req, res, next) => {
    Favorite.findById(req.params.id)
        .then(favorite => {
            if (!favorite) throw { status: 404, message: 'Data not found' }
            else {
                if (favorite.user == req.decode.id) {
                    next()
                } else {
                    throw { status: 403, message: ' Unauthorized user' }
                }
            }
        })
        .catch(next)
}