const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }

    }, age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }, password: {
        type: String,
        required:true,
        minLength:7,
        validate(value) {
            // if (value.length < 6) {
            //     throw new Error('password must be atleast 6 characters')
            // }
            if (value.toLowerCase().includes('password')) {
                throw new Error('This is very weak password')
            }
        },trim: true
    }
})

module.exports = User