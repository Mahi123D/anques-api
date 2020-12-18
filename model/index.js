var mongoose = require ('mongoose');

   var todoSchema = new  mongoose.Schema({
    eid: String,
    name: String,
    address: String,
    contactno: String
});


mongoose.model("todo", todoSchema);
