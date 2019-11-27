const { Schema, model } = require('mongoose')
const { hash } = require('../helpers/bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email format']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [5, 'Minimum password length is 5']
    }
})

userSchema.pre('save', function (next) {
    this.password = hash(this.password)
    next()
})

const User = model('User', userSchema)

module.exports = User
