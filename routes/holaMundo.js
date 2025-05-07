const express = require("express")
const router = express.Router()
const holacontroller =require("../controllers/holaMundo")

router.get("/",holacontroller.holaMundo)

router.get("/esteban",(res)=>{
    res.send("hola estaban")
})

router.get("/cesar",(req,res)=>{
    res.send("hola cesar")
})
module.exports = router