var express = require('express');
var app = express();
var cors = require('cors')

var mysql = require('mysql');
var bodyParser = require('body-parser');


//connection to database
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'nodemysql'
});

//check if database error
connection.connect(function (err) {
    if (err) {
        throw err
    } else {
        console.log("you are now connected")
    }
})

//body parsar config for json encoded and url encoded

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
//create app server

var server = app.listen(3001, "127.0.0.1", function () {
    var host = server.address().address
    var port = server.address().port

    console.log("My app listening at http://%s:%s", host, port)
})


//endpoint to get all students
app.get('/blogs', function (req, res) {
    connection.query('select * from blogs', function (error, results, fields) {
        if (error) {
            throw error
        } else {
            res.end(JSON.stringify(results))
        }
    })
})

//rest api to create a new record into mysql db

app.post('/blogs', function(req, res){
    var postData = req.body;

    connection.query('Insert INTO blogs SET ?', postData, function(error, results, fields){
        if (error) {
            throw error
        } else {
           res.end(JSON.stringify(results)) 
        }
    })
})