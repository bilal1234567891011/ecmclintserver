const db =require('./db')

//to get all products
const getAllProducts=()=>{
return db.Book.find().then(result=>{
    if(result){
        return{
            
                statusCode:200,
                books:result
                 
            
        }
    }
    else{
        return{
        statusCode:400,
        message:"no products found"
        }
    }
})
}


//to add products
const addBook = (id,uname,author,description,price,available,image,website)=>{
    return db.Book.findOne({id}).then(books=>{
        if(books){
        return{
            statusCode:401,
            message:"unable to add"
        }}
        else{
            //create object of bbo model for new book
            const newBok = new db.Book({
              id,
              uname,
              author,
              description,
              price,
              available,
              image,
              website
            })
            //save the object in db
            newBok.save()
            return{
                statusCode:200,
                message:"Product is added"
            }
        }
    })
}


//to get a sin gle product
 const getAnBook = (id)=>{
    return db.Book.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                book:result
            }
        }
        else{
            return{
                statusCode:400,
                message:"no Product found"
            }
        }
    })
}

//to delete book
const removeBook=(eid)=>{
  return db.Book.deleteOne({id:eid}).then(result=>{
    if(result){
        return{
            statusCode:200,
            message:"Product removed"
        }
    }
    else{
        return{
            statusCode:400,
            message:"Product is not present"
        }
    }
  })
}

//to edit book
const editBook=(id,uname,author,description,price,available,image,website)=>{
    return db.Book.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.uname=uname
            result.author=author
            result.description=description
            result.price=price
            result.available=available
            result.image=image
            result.website=website
            
            
            result.save()
            return{
                statusCode:200,
                message:"Product data updated"
            }

}
else{
    return{
        statusCode:400,
        message:"Product is not present"
    }
}
    })
}



module.exports={
    getAllProducts,addBook,getAnBook,removeBook,editBook
}
