import Book from './Book'
import axios from 'axios'
import {React,useState,useEffect} from 'react'
import './Book.css'
import Header from '../Header'
import { Grid } from '@mui/material'



function Books() {
  const [books,setBooks]=useState()
  const BookList=async()=>{
  const result= await axios.get("http://localhost:8000/getAllProducts")
  setBooks(result.data.result.books)
}
useEffect(()=>{
  BookList()
},[])


  return (
    <div>
      <Header></Header>
      <Grid container spacing={0}>
        <Grid item lg={12}>
      <ul>
        
         {books?.map((book,i)=>(
          <li  key={i}>
            <Book book={book}></Book>
          </li>
         ))}
      </ul>
      </Grid>
      </Grid>
      
    </div>
  )
}

export default Books
