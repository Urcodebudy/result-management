const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    Encroll_no : {
        type : Number,
        required : [true, 'Please enter your encrollment number']
    },
    Encroll_yr : {
        type : Number,
        required : [true, 'Please enter your encrollment year']
    },
    result : [
        {  
             type : mongoose.Schema.Types.ObjectId,
             required : true,
             ref : 'Result'
         }
     ]
})

module.exports = mongoose.model('User', userSchema);