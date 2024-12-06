const mongoose = require('mongoose')
const userModel = require('./user.model')

const studentSchema = new mongoose.Schema(
    {
        rollno: {
            type: String,
            required: [true, 'please enter roll number']
        },
        subjects: {
            type: String,
            enum: ["BCSE","BCSE - 503", "BCSE - 504", "BCSE - 505", "BCSE - 506", "BCSE-502L", "BCSE-504L", "BCSE-506L","BET-I", "BHUM-118", "BMAT-003C", "BMAT-003CL", "PR-I"]
            
        },
        class: {
            type: String,
            enum: ["3F1", "3F2", "3F3"]
        },
    }
)

const studentModel = userModel.discriminator('Student', studentSchema);
module.exports = studentModel