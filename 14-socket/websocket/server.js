const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.listen(9001, 'localhost', () => {
    console.log('localhost:9001');
})