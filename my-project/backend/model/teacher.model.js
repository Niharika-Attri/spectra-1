const mongoose = require('mongoose')
const { default: userModel } = require('./user.model')

const teacherSchema = new mongoose.Schema(
    {
        id : {
            type: String,
            required: [true, 'Please enter teacher id']
        },
        class: {
            type: String,
            enum : ["3F1", "3F2", "3F3"]
        },
        subject: {
            type: String,
            enum: ["BCSE","BCSE - 503", "BCSE - 504", "BCSE - 505", "BCSE - 506", "BCSE-502L", "BCSE-504L", "BCSE-506L","BET-I", "BHUM-118", "BMAT-003C", "BMAT-003CL", "PR-I"]
        },
    }
)

const teacherModel = new userModel.discriminator('teacher', teacherSchema)

export default teacherModel;