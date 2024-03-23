const express = require("express");
const router = express.Router()
const bandasController=require('../controllers/bandasController')



router.get("/", bandasController.index)

router.get("/id/:id", bandasController.id)

router.get("/generos", bandasController.generos)




module.exports = router
