const mongoose = require('mongoose');


const subjectSchema = new mongoose.Schema({
    sem : {
       type : Number,
       required : [true, 'Please enter your semester']
    },
    sub_name : {
        type : String,
        required : [true, 'Please enter subject name']
    },
    sub_code : {
        type : String,
        required : [true, 'Please enter subject code']
    }
})


module.exports = mongoose.model('Subject', subjectSchema);