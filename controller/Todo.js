
const Todo=require("../Models/Todo");
const User=require("../Models/User");

exports.Todos=async(req,res,next)=>{

   try{
    req.body.user=req.params.id;

    const user=await  User.findById(req.params.id);

    if(!user){
        res.json("id not valid");
    }
    const datas=await Todo.create(req.body);


    res.status(200).json({success:true, count:course.length,data:datas});
    }
    catch(err){
        res.json(err);
    }
    
}


//list all todo data
 //todo getall app
 exports.list=async(req,res)=>{
    try{
    const alls=await Todo.find();
   res.status(200).json(alls);
   //res.json(alls);
    
    }
    catch(err){
      res.status(400).json({success:false});
    }
  };


  //delete todo data
  exports.deletetodo=async(req,res)=>{
    try{
        const todoid=await Todo.findById(req.params.id);

        if(!todoid){
            res.json("pls post id");
        }
        const removeid=await Todo.deleteOne(todoid);
        res.status(200).json("success fully");
    }


catch(err){
    res.json(err);

}

}

//get title
exports.gettitle=async(req,res)=>{
    if(!req.params.id){
        res.json("pls put UserId")
    }

    try{
        const datas=await Todo.findById(req.params.id);
        res.json(datas);

    }
    catch(err){
        res.json(err);
    }

}

//edit title
exports.edit=async(req,res)=>{

    try{
        const titleid=await Todo.findById(req.params.id);
        if(!titleid){
            res.status(401).json("cannot resuleve id");
        }

        const newtitle=await Todo.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json(newtitle);


    }
    catch(err){
  res.json(err);
    }
}

//get todo based user
exports.getuser=async(req,res)=>{
    if(!req.params.id){
        res.json("pls put UserId")
    }

    try{
        const userid=await Todo.find({user:req.params.id});
        res.json({data:userid});

    }
    catch(err){
        res.json(err);
    }

}
