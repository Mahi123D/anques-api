"use strict";
var mongoose = require('mongoose');
var todoModel = mongoose.model("todo");


var saveTodo = function (context, cb) {
    console.log("context", context.body);

    var todo = new todoModel();
    todo.eid = context.body.eid;
    todo.name = context.body.name;
    todo.address = context.body.address;
    todo.contactno = context.body.contactno;

    if (context.body._id) {
        todoModel.updateOne({ _id: context.body._id },
            {
                eid: context.body.eid,
                name: context.body.name,
                address: context.body.address,
                contactno: context.body.contactno
            }, function (err, docs) {
                return cb({
                    status: "success",
                });
            });
    } else {
        todo.save((err, docs) => {
            console.log("docs", docs);

            return cb({
                status: "success",
            });
        });
    }

}

var getTodoList = function (context, cb) {

    todoModel.find({}, function (e, r) {
        return cb({
            status: "success",
            details: r
        });
    });
}

var getById = function (context, cb) {

    console.log("id", context.id);
    var id = mongoose.Types.ObjectId(context.id);

    todoModel.findOne({ _id: id }, function (e, r) {
        return cb({
            status: "success",
            details: r
        });
    });
}

var deleteById = function (context, cb) {

    var id = mongoose.Types.ObjectId(context.id);
    todoModel.deleteOne({ _id: id }, function (e, r) {
        return cb({
            status: "success",
        });
    });
}



exports.saveTodo = saveTodo;
exports.getTodoList = getTodoList;
exports.getById = getById;
exports.deleteById = deleteById;