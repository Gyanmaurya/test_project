 const express=require('express');
 const app=express();
 const port=4000;

  
 app.get("/books",logger,(req,res)=>{
     
   return res.send( { route: "/books", login:"Books Portal"});
 })


 app.get("/libraries",checkPermission,logger,(req,res)=>{
     
   return res.send({ route: "/libraries", permission: true,login:"librarian"});
 })


 app.get("/authors",checkPermission,logger,(req,res)=>{
     
   return res.send({ route: "/authors", permission: true,login :"author"});

 })


function logger(req,res,next){
      if(req.path==="/libraries"){
          req.loggin="login librarian";
      }
      else if(req.path==="/authors"){
        req.loggin="login author";
      }
      else if(req.path==="/books"){
        
      }
      next();
} 
function checkPermission(req,res,next){
    if(req.path==="/libraries"){
        req.permission=true;
    }
    else if(req.path==="/authors"){
        req.permission=true;
    }
    else{
        req.permission=false;
    }
    next();
}



 app.listen(port,()=>{
     console.log("We are listening this port")
 })