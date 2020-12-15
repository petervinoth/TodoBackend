const express=require('express');

const mongoose=require('mongoose');

const User=require("../Models/User");
const bcrypt =require("bcryptjs");

exports.register=async(req,res,next)=>{

    const {fullName,email,password}=req.body;
    if(!fullName || !email || !password){
        res.status(401).json("pls put the all data!!");
    }
    const user=await User.create({
        fullName,
        email,
        password,
    
    });
    res.status(200).json({messase:"Register succesfully",data:user});
}

 
exports.login=async (req,res,next)=>{

    const{email,password}=req.body;

   
    const user=await User.findOne({email});
    

    //const ismatch=await user.matchpass(password);
 // const ismatch = await hashedpassword.compare(user);
  const ismatch=await bcrypt.compare(password,user.password);
    if(ismatch){
        const main=await User.findOne({email});
        res.json(main);
    }
    else{
        res.status(401).json("invalid-centails")
    }
   
    //res.json({message:user});
}
