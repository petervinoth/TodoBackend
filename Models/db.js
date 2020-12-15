const mongoose =require('mongoose');


mongoose.connect('mongodb+srv://vinothboopathi:vinothboopathi@dev.jluo1.mongodb.net/task',{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true,useFindAndModify: false }
,(err) => {
    if(!err){
        console.log('successful connect database');
    }
    else{
        console.log('error'+err);
    }
});


require("./User");
require("./Todo");