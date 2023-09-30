import axios from 'axios'
import {React,useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

import { Button } from '@mui/material'

import Card from 'react-bootstrap/Card';
import Header from './Header';


function View() {
 
    const[book,setBook]=useState({})

    const params=useParams()

    
    const fetchBook =async ()=>{
        const result= await axios.get('http://localhost:8000/getAnBook/'+params.id)
        setBook(result.data.book);
    }

    useEffect(()=>{
    fetchBook()
    },[])
    

  return (
    <div>

<Header></Header>


{/* <section className="py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={book.image} alt="..." /></div>
            <div className="col-md-6">
                <div className="small mb-1" style={{color:"rgb(22,107,107)"}}>SKU: BST-498</div>
                <h1 className="display-5 fw-bolder" style={{color:"rgb(22,107,107)"}} >{book.uname}</h1>
                <div className="fs-5 mb-5">
                    
                    <span>Rs {book.price} </span>
                </div>
                <p className="lead" style={{color:"rgb(6, 109, 109)"}}></p>
                <div className="d-flex"> */}
                   {/* <a href="products/edit_product/{{productdata.id}}"><button style="color: green;" className="btn btn-outline-dark flex-shrink-0 " type="button">
                        <i style="color: rgb(22,107,107);" className="bi-cart-fill me-1"></i>
                        Edit
                    </button></a> 

                    <a href="products/delete_product/{{productdata.id}}">  <button style="color: red;" className="btn btn-outline-dark flex-shrink-0 ms-3" type="button">
                        <i style="color: rgb(22,107,107);" className="bi-cart-fill me-1"></i>
                        Delete
                    </button></a> 
 */}
                {/* </div>
            </div>
        </div>
    </div>
</section> */}











  <h2 style={{textAlign:'center',fontSize:'60px',color:"rgb(22,107,107)" }}>{book.uname}</h2>

         {/* <Card style={{ width: '30rem',height:'30rem' }} className='mt-3'>
      <Card.Img variant="top" src={book.image} />

      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
          {book.description}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Rs {book.price}</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>  */}



<Card style={{ width: '30rem',height:'30rem' }}>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Text style={{color:"rgb(22,107,107)",fontSize:'20px'}}>
         {book.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{color:"rgb(22,107,107)"}} >Rs - {book.price} </ListGroup.Item>
        <ListGroup.Item style={{color:"rgb(22,107,107)"}} >Available - {book.available} </ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Link to={book.website}>
      <Button sx={{ width: 100, padding: 1, margin: 2 }}  size="small" variant="outlined" color="success">Buy</Button></Link>

      </Card.Body>
    </Card>
    </div>
  )
}

export default View