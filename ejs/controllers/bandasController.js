const db = require ("../db/index")

const bandasController = {
    index: function (req,res){ 
        return res.send(db.lista)
    },
    id: function (req,res){

    },
    generos:function (req,res){

    }
}