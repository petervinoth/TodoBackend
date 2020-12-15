const mongoose=require("mongoose");

const TodoSchema=new mongoose.Schema({
    title:{
        type:String
    },
     user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }

});

module.exports=mongoose.model('todo',TodoSchema);