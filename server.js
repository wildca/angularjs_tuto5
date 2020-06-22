var express = require('express');
var path = require('path');

var app = express()

app.use(express.static('public'))

app.get('*', (req, resp) => {
    resp.sendFile('./public/index.html', {root: __dirname})
})

app.listen(8000, () => {
    console.log("server running");
})