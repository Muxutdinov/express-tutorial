const {Router} = require("express")

const books = require("../Books/Books")
const router = Router()
//All books
router.get("/",(req,res)=>{
    res.json(books)
})

//Get one book by id
router.get("/:id",(req,res)=>{
const isExist = books.some((value)=>value.id===parseInt(req.params.id))
if(isExist){
    res.json(books.filter((value)=>value.id === parseInt(req.params.id)))
}else{
    res.json([{message:`Siz yozgan ${req.params.id} idlik kitob topilmati!`}])
}
})


module.exports = router