const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name : {
            type: String, 
            required: true,
        },
        email : {
            type : String, 
            required: [true, 'Please enter email'],
            trim: true,
            unique: [true, 'Email already registered, please login or create new account.'],
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address']
        },
        password : {
            type: String,
            required: [true, 'Please enter password']
        }
    },
    {
        timestamps: true,
        discriminatorKey: "role",
    }
)

const userModel = mongoose.model('User', userSchema)
module.exports = userModel