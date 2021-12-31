const {Router} = require("express")
const uuid = require("uuid")
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


//Add new Book
router.post("/",(req,res)=>{
    const newBook = {
        name:req.body.name,
        title:req.body.title,
        id:uuid.v4()
    }
    if(!req.body.name || !req.body.title){
       return res.status(400).json({message:"Barcha malumotlarni kiriting!"})
    }
     

    books.push(newBook)
    res.json(books)
})


//Edit book by id
router.put("/:id",(req,res)=>{
    const isExist = books.some((value)=>value.id===parseInt(req.params.id))
    if(isExist){
        const updateBook = req.body

           books.forEach((value)=>{
        if(value.id === parseInt(req.params.id)){
         value.name = updateBook.name ? updateBook.name : value.name,
         value.title = updateBook.title ? updateBook.title : value.title,
         
         res.status(200).json({message:"malumotlar mofaqiyatli bajarildi!", value})
        }
            })
    }else{
        res.json([{message:`Siz yozgan ${req.params.id} idlik kitob topilmati!`}])
    }
    })








router.delete("/:id",(req,res)=>{
    const isExist = books.some((value)=>value.id===parseInt(req.params.id))
    if(isExist){
        res.json({
          message:"Kitob o'chirib tashlandi !",
          books: books.filter((value)=>value.id !== parseInt(req.params.id))
        })
    }else{
        res.json([{message:`Siz yozgan ${req.params.id} idlik kitob topilmati!`}])
    }
    })



    
module.exports = router