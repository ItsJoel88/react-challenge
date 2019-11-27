module.exports = (err, req, res, next) => {
    console.log(err)
    let errors = []
    if (err.name === 'ValidationError') {
        for (key in err.errors) {
            errors.push(err.errors[key].message)
        }
        res.status(400).json(errors)
    } else if (err.code === 11000) {
        var MongooseError = require('mongoose/lib/error')
        var valError = new MongooseError.ValidationError(err)
        valError.errors["email"] = new MongooseError.ValidatorError({ message: 'Email already exixts' })
        errors.push(valError.errors.email.message)
        res.status(400).json(errors)
    } else if (err.status === 404 || err.status === 400 || err.status === 403) {
        res.status(err.status).json({ message: err.message })
    }
}