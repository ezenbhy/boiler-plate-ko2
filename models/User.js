const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5        
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //1:관리자, 0:일반
        type: Number,
        default: 0
    },
    image: String,
    token: { //유효성검사
        type: String
    },
    tokenExp: { //유효기간
        type: Number
    }
})

const User = mongoose.model('User',userSchema)

module.exports = {User}