import {React,useEffect,useState} from 'react'
import { FormLabel, TextField,Button } from '@mui/material'
import { Box } from '@mui/system'
import './Edit.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'



function Edit() {
    const [id,setid]=useState('')
    const [uname,setuname] = useState('')
    const [description,setdescrption] = useState('')
    const [price,setprice] = useState('')
    const [avialble,setavilable] = useState('')
    const [image,setimage] = useState('')

    const[website,setwebsite] =useState('')

const location =useNavigate()
const params=useParams()
// console.log(params.id);
const fetchBook =async ()=>{
    const result= await axios.get('http://localhost:8000/getAnBook/'+params.id)
    console.log(result.data.book);

    setid(result.data.book.id)
    setuname(result.data.book.uname)
    setdescrption(result.data.book.description)
    setprice(result.data.book.price)
    setavilable(result.data.book.available)
    setimage(result.data.book.image)
    setwebsite(result.data.book.website)

    // console.log(id);
    // console.log(uname);
    

}
const handleUpdate=async (e)=>{
    e.preventDefault()

    const body={
        id,
        uname,
        description,
        price,
        avialble,
        image,
        website

    }
    const result= await axios.post('http://localhost:8000/editBook',body)
    
    alert(result.data.message)

location('/')
}

useEffect(()=>{
fetchBook()
},[])

  return (
    <div>
      <Header></Header>
        <h1 style={{textAlign:'center',fontSize:'60px'}}>Edit Book</h1>
          <form>
        <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={500}  alignContent={"center"} alignSelf="center" marginLeft={"auto"} marginRight="auto" marginTop={7}>
 <FormLabel>Name</FormLabel>
<TextField  margin='normal' fullWidth variant='outlined' name='name' value={uname}
onChange={(e)=>setuname(e.target.value)}/>
<FormLabel>Description</FormLabel>
<TextField  margin='normal' fullWidth variant='outlined' name='description' value={description}
onChange={(e)=>setdescrption(e.target.value)}/>
<FormLabel>price</FormLabel>
<TextField  type={"number"} margin='normal' fullWidth variant='outlined' name='price' value={price}
onChange={(e)=>setprice(e.target.value)}/>
<FormLabel>Avialble</FormLabel>
<TextField  margin='normal' fullWidth variant='outlined' name='available' value={avialble}
onChange={(e)=>setavilable(e.target.value)}/>
<FormLabel>Image</FormLabel>
<TextField  margin='normal' fullWidth variant='outlined' name='image' value={image}
onChange={(e)=>setimage(e.target.value)}/>
<FormLabel>Website</FormLabel>
<TextField  margin='normal' fullWidth variant='outlined' name='image' value={website}
onChange={(e)=>setwebsite(e.target.value)}/>

<Button onClick={(e)=>handleUpdate(e)} variant='contained' type='submit'>Update Product</Button>
</Box>
      </form>
    </div>
  )
}

export default Edit