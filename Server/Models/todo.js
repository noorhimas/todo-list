const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true, // Ensure the task field is required
        trim: true // Remove unnecessary white spaces from the task
    },
    done:{
        type: Boolean,
        default:false
    }
    
})
const todoModel = mongoose.model("todos", todoSchema)
module.exports = todoModel