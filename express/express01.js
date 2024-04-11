const express = require('express')
const app = express()

app.get('/', function (req, res){
    res.send('Hello World')
})

app.get('/apple', function (req, res){
    res.send('apple')
})

app.get('/home', function (req, res){
    // res.send(__dirname)
    res.sendFile(__dirname)
})

app.listen(3000);