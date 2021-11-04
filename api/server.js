
const express = require('express');
const cors = require('cors');
const User = require('./users/model')
const server = express()

require('colors')

server.use(express.json())

server.get('/api/users', (req, res) => {
    User.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json({
            message:'error getting users', 
            err: err.message
        })
    })
})

server.post('/api/register', (req, res) => {
    const user = req.body
    if (!user.username || !user.password) {
        res.status(404).json({
            message: 'username and password required'
        }) 
    } else {
            User.insert(user)
                .then(newUser => {
                    res.status(201).json(newUser)
                })
                .catch(err => {
                    res.status(500).json({
                        message:'error getting users', 
                        err: err.message
                    })
                })
        }

})

server.post('/api/login', (req, res) => {
const loginCredentials = User.findById(req.params.id)
    const user = req.body
    if(loginCredentials.username && loginCredentials.password === user) {
        res.status(200).json({
            message: `Welcome ${loginCredentials.username}`
        })
    } else {
        res.status(404).json({
            message: 'incorrect credentials'
        })
    }

})

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})




module.exports = server