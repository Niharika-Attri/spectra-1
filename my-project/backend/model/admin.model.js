const mongoose = require('mongoose')
const { default: userModel } = require('./user.model')

const adminSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    department: {
        type: String,
        enum: ['MMEC', 'MMIM']
    },
    permissions: [{
        type: String
    }]
})

const adminModel = new userModel.discriminator('admin', adminSchema)

export default adminModel