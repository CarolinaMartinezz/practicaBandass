const express = require("express");
const router = express.Router()

const bandas = require("../db/index")
const bandasController=require('../controllers/bandasController')

router.get("/", bandasController.index)

router.get("/:id", bandasController.id)

router.get("/generos", bandasController.generos)






module.exports = router
