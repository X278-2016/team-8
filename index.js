/**
 * Created by Peter on 11/10/16.
 */

'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose');

let app = express();
app.use(express.static('./'));

//Adding bodyParser middleware
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

//Connecting to MongoDB database
let dbname = 'hpv_db';
mongoose.connect('mongodb://localhost:27017'+dbname);

app.get('*', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

//Starting up server on port 8080
let server = app.listen(8080, function(){
    console.log('HPV app listening on '+server.address().port);
});