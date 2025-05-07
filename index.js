const express = require("express")
const holaroutes = require("./routes/holaMundo") 

const app = express()
const PORT = process.env.PORT || 3006
    
    
app.set("port",PORT)
app.use("/api/hola",holaroutes)

app.get("/",(reg,res)=>{
    res.send("hola mundo")
})

app.listen(PORT,()=>{
   console.log(`escuchando en el puerto ${PORT}`)
})