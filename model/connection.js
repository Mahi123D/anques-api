var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo',{useNewUrlParser:true , useUnifiedTopology: true },(error)=>{
if(!error){
  console.log("mongodb coonected")
}  
else{
  console.log("mongodb is not coonected",error);
}
})

const order = require("./index");