"use strict";

var lib = require("../../lib/index");

var saveTodo = function (req, res) {

    var context = {
        req: req,
        body: req.body 
    }
    console.log("context",context.body);

    lib.saveTodo(context, function (e, r){
        return res.json (e || r);
    });

}


var getTodoList = function (req, res) {

    var context = {
        req: req
    }

    lib.getTodoList(context, function (e, r){
        return res.json (e || r);
    });

}

var getById = function (req, res) {

    var context = {
        req: req,
        id: req.params.id
    }

    lib.getById(context, function (e, r){
        return res.json (e || r);
    });

}

var deleteById = function (req, res) {

    var context = {
        req: req,
        id: req.params.id
    }
    console.log("context.id",context.id)
    lib.deleteById(context, function (e, r){
        return res.json (e || r);
    });

}



exports.saveTodo = saveTodo;
exports.getTodoList = getTodoList;
exports.getById = getById;
exports.deleteById = deleteById;