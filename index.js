const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname,"public")))

// app.get("/",(req,res)=>{
//     res.send("<h1>Bosh sahifa</h1>")
// })

app.listen(4000,()=>console.log("Started run server..."))