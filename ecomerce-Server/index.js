const express=require('express')

const app=express() 
const cors =require('cors')
const logic=require('./logic')

//frontend connection
app.use(cors({origin:'http://localhost:3000'}))

app.use(express.json())



//to get all products
app.get('/getAllProducts',(req,res)=>{
    logic.getAllProducts().then(result=>{
        res.status(result.statusCode).json({result})
    })
})

//to add product
app.post('/addBook',(req,res)=>{
    logic.addBook(req.body.id,req.body.uname,req.body.author,req.body.description,req.body.price,req.body.available,req.body.image,req.body.website).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//to get a single product
app.get('/getAnBook/:id',(req,res)=>{
    logic.getAnBook(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})



//to delete product
app.delete('/deleteBook/:id',(req,res)=>{
    logic.removeBook(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//to editproduct
app.post('/editBook',(req,res)=>{
    logic.editBook(req.body.id,req.body.uname,req.body.author,req.body.description,req.body.price,req.body.avialble,req.body.image,req.body.website).then(result=>{
        res.status(result.statusCode).json(result)
    })
})



app.listen(8000,()=>{
    console.log("server started at 8000");
})

