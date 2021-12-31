const express = require("express")
const { use } = require("express/lib/application")
const path = require("path")
const logger = require("./Middlewares/logger")

const app = express()
// app.use(logger)

//Body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//All books
// app.get("/api/books",(req,res)=>{
    // res.json(books)
// })
//==========================

//Get one book by id
app.use('/api/books',require("./routes/books"))
//============================

//Papkani statik qilish
// app.use(express.static(path.join(__dirname,"public")))



// app.get("/",(req,res)=>{
//     res.send("<h1>Bosh sahifa</h1>")
// })

app.listen(4000,()=>console.log("Started run server..."))
