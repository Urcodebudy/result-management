const mongoose = requrie('mongoose');

const resultSchema = new mongoose.resultSchema({
    subject : [
        {
       type : mongoose.Schema.Types.ObjectId,
       required : true,
       ref : 'Subject'
       }
   ],
   total_marks : {
       type : Number,
       default : 0.0
   }
})

module.exports = mongoose.model('Result', resultSchema);