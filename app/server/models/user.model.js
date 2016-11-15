/**
 * Created by Peter on 11/11/16.
 */

let mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

//Creating user schema
let user_schema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    clinic: {type: String, required: true},
    name: {type: String, required: true}
});

//Creating user model
let user_model = mongoose.model('User', user_schema);

//Setting up middleware to hash passwords
user_schema.pre('save', function(next){
    let user = this;
    bcrypt.hash(user.password, 10, function(err, encrypted){
        if(!err){
            user.password = encrypted;
            next();
        }
        else
        {
            console.log(err);
            console.log('User not saved due to password hashing error');
        }
    });
});