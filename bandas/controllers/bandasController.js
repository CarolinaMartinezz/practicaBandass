const db = require ("../db/index")

const bandasController = {
    index: function (req,res){ 
        console.log('hola, anda')
        return res.render("listadoBandas", {
            lista: db.lista
        })
    },
    id: function (req, res) {
        let id = req.params.id;
        let bandaEncontrada = null;
        for (let i = 0; i < db.lista.length; i++) {
            if (id == db.lista[i].id) {
                bandaEncontrada = db.lista[i];
                break;
            }
        }
        if (bandaEncontrada) {
            return res.render('detalleBandas', { lista: bandaEncontrada });
        } else {
            return res.send("No encontramos la banda indicada. Por favor, elija otro ID.");
        }
    },
    generos:function (req,res){
        let resultado = [];
        for (let i=0; i < db.lista.length; i++){
            resultado.push(db.lista[i].genero);
        }
        return res.send(resultado) //cambiar a render
    }
}

module.exports= bandasController