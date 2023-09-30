import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, } from 'react-router-dom'
import './Book.css'
import Header from '../Header'

 



function Book(props) {
    const {id,uname,author,description,price,image}=props.book

    const BookList=async()=>{
      const result= await axios.get("http://localhost:8000/getAllBooks")
      // console.log(result.data.result.books)
    }
useEffect(()=>{
BookList()
},[])

    const handleDelete=async (id)=>{
     const result = await axios.delete('http://localhost:8000/deleteBook/'+id)
     alert(result.data.message)
BookList()

    }
  return (
    <div className='card d1'>

        <img src={image} alt={uname}/>
        {/* <article className='text'>By {author}</article> */}
        <h3 className='text'>{uname}</h3>
        {/* <p className='text'>{description.slice(0,20)}</p> */}
        <h3 className='text'>Rs {price}</h3>
        <Link to={'/edit/'+id}>
    <Button  sx={{mt:'auto'}}>Update</Button>
    </Link>
    
    <Link>
    <Button onClick={()=>handleDelete(id)} sx={{mt:'auto'}}>Delete</Button></Link>
 <Link to={'/view/'+id}>  
<Button sx={{mt:'auto'}}> View</Button></Link> 
    
    </div>
  )


  

}


export default Book