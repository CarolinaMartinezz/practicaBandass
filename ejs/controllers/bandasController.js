const db = require ("../db/index")

const bandasController = {
    index: function (req,res){ 
        return res.render("listadoBandas", {
            lista: db.lista,
        })
    },
    id: function (req,res){
        let id = req.params.id;
        for(let i=0; i<db.lista.length; i++){
            if (id == db.lista[i].id){
                return res.send(db.lista[i])
            } else if (id > db.lista.length) {
                return res.send("No encontramos a la banca indicada. Por favor, elija otro id.")
            }
        }

    },
    generos:function (req,res){
        let resultado = [];
        for (let i=0; i < db.lista.length; i++){
            resultado.push(db.lista[i].genero);
        }
        return res.send(resultado)
    }
}

module.exports= bandasController