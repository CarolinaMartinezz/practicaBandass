const db = require ("../db/index")

const bandasController = {
    index: function (req,res){ 
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
        } else { //(null)
            return res.send("No encontramos la banda indicada. Por favor, elija otro ID.");
        }
    },
    generos: function (req, res) {
        let genero = req.params.generos.toLowerCase(); //por las dudas
        let resultado = [];
        for (let i = 0; i < db.lista.length; i++) {
            if (genero === db.lista[i].genero.toLowerCase()) { 
                resultado.push(db.lista[i]);
            }
        }
        if (resultado.length > 0) {
            res.render('porGenero', { lista: resultado, gen: genero });
        } else {
            return res.send('No encontramos bandas con ese género.');
        }
    }
    
}

module.exports= bandasController