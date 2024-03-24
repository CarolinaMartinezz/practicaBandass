const express = require("express");
const router = express.Router()
const bandasController=require('../controllers/bandasController')



router.get("/", bandasController.index)

router.get("/:id", bandasController.id)

router.get("/generos/:generos", bandasController.generos)




module.exports = router
