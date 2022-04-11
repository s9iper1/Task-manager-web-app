const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {

})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }

//     }, age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }, password: {
//         type: String,
//         required:true,
//         minLength:7,
//         validate(value) {
//             // if (value.length < 6) {
//             //     throw new Error('password must be atleast 6 characters')
//             // }
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('This is very weak password')
//             }
//         },trim: true
//     }
// })

// const name = new User({name: '  Bilal Shahid   ', email: 'S9IPER1@GMAIL.COM', password: 'test'})

// name.save().then(()=> {
//     console.log(name)
// }).catch((error) => {
//     console.log(error)
// })

// const TaskManager = mongoose.model('tasks', {
//     description: {
//         type: String,
//         trim: true,
//     }, completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new TaskManager({description: 'Play call of duty'})

// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })