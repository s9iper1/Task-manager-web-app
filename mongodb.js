// CRUD operations.

const {MongoClient, ObjectID } = require('mongodb')

const connnectionUrl = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

const id = new ObjectID()

console.log(id.id.length)

MongoClient.connect(connnectionUrl, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        console.log('unable to connect to database')
    } else {
        const db = client.db(database)
        db.collection('tasks').deleteOne({
            description: 'Get new plants'
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
        // db.collection('users').deleteMany({age: 32}).then((result) => {
        //     console.log(result)

        // }).catch((error) => {
        //     console.log(error)
        // })
        // db.collection('tasks').updateMany({completed: true}, 
        // {$set :{
        //     completed: false
        // }}).then((result) => {
        //     console.log(result)

        // }).catch((error) => {
        //     console.log(error)

        // })

        // db.collection('users').updateOne({
        //     _id: new ObjectID('623322c2cec15df8810f1415')}
        //     , {
        //     $inc: {
        //     age: -1
        // }}).then((result) => {
        //     console.log(result)
        // }).catch((error)=> {
        //     console.log(error)
        // })
        // db.collection('tasks').findOne({_id: new ObjectID('62332a477ecf7f2036f82a78')}, (error, task) => {
        //     if(error) {
        //         console.log('unable to find the task')
        //     } else {
        //         console.log(task)
        //     }
        // })
        // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        //     console.log(tasks)
        // })
        // db.collection('users').findOne({name: 'asim'}, (error, user) => {
        //     if(error) {
        //         console.log('unable to find the user')
        //     } else {
        //         console.log(user)
        //     }
        // })
        // db.collection('users').find({age: 32}).toArray((error, users) => {
        //     console.log(users)
        // })
        // insert one
        // db.collection('users').insertOne({
        //     name: 'bilal',
        //     age: 29
        // }, (error, result) => {
        //     if (error) {
        //         console.log('unable to insert the user')
        //     } else {
        //         console.log(result)
        //     }
        // })
        // db.collection('users').insertMany([{
        //     name: 'asim',
        //     age: 32
        // }, {
        //     name: 'shahid', age: 30
        // }], (error, result) => {
        //         if (error) {
        //             console.log('unable to insert the user')
        //         } else {
        //             console.log(result)
        //         }
        // })

        // db.collection('tasks').insertMany([{
        //     description: 'Get new plants', completed: true
        // }, {
        //     description: 'Have tea', completed: false
        // }, {
        //     description: 'Clean the house', completed: false
        // }], (error, result) => {
        //     if (error) {
        //         console.log('unable to insert multiple values')
        //     } else {
        //         console.log(result)
        //     }
        // })

    }
})