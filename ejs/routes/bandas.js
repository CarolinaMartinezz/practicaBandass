const express = require("express");
const router = express.Router()

const bandas = require("../db/index")

router.get("/", bandasController.index)

router.get("/:id", bandasController.id)

router.get("/generos", bandasController.generos)






module.exports = router
