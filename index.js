const express =require("express");
const mongoose=require("mongoose");
const cors =require("cors");

require("./Models/db");
require('./config/config');
const login=require("./Routes/UserRouter");
const todos=require("./Routes/Todos");


const app=express();

app.use(express.json());
app.use(cors());

 

//port
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));




//setup routes
app.use('/api',login);
app.use('/todo',todos);