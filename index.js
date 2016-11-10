/**
 * Created by Peter on 11/10/16.
 */

'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan');

let app = express();
app.use(express.static('./'));

//Adding bodyParser middleware
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

//Starting up server on port 8080
let server = app.listen(8080, function(){
    console.log('HPV app listening on '+server.address().port);
});