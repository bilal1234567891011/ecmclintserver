import { FormLabel, TextField,Button } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import{ React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import Header from './Header'




function AddBook() {

const [id,setid]=useState('')
const [uname,setuname] = useState('')
const [description,setdescrption] = useState('')
const [price,setprice] = useState(0)
const [avialble,setavilable] = useState('')
const [image,setimage] = useState('')

const[website,setwebsite] =useState('')



useEffect(()=>{
setid(uuid().slice(0,3))
},[])
let location=useNavigate()

const addBook=async (e)=>{

  e.preventDefault()

  setid(uuid().slice(0,3));
const body ={
  id,
  uname,
  description,
  price,
  available:avialble,
  image,
  website
}

  const result = await axios.post('http://localhost:8000/addBook',body)
  alert(result.data.message)
  location('/')

// console.log(body);

  // console.log(id);
// console.log(uname);
// console.log(author);
// console.log(description);
// console.log(price);
// console.log(avialble);
// console.log(image);

}
  


  return (
    <div>
      <Header></Header>
      <form >
        <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={500}  alignContent={"center"} alignSelf="center" marginLeft={"auto"} marginRight="auto" marginTop={7}>
 <FormLabel>Name</FormLabel>
<TextField onChange={(e)=>setuname(e.target.value)} margin='normal' fullWidth variant='outlined' name='name'/>
<FormLabel>Description</FormLabel>
<TextField onChange={(e)=>setdescrption(e.target.value)} margin='normal' fullWidth variant='outlined' name='description'/>
<FormLabel>price</FormLabel>
<TextField onChange={(e)=>setprice(e.target.value)} type={"number"} margin='normal' fullWidth variant='outlined' name='price'/>
<FormLabel>Avialble</FormLabel>
<TextField onChange={(e)=>setavilable(e.target.value)} margin='normal' fullWidth variant='outlined' name='available'/>
<FormLabel>Image</FormLabel>
<TextField onChange={(e)=>setimage(e.target.value)} margin='normal' fullWidth variant='outlined' name='image'/>
<FormLabel>Website</FormLabel>
<TextField onChange={(e)=>setwebsite(e.target.value)} margin='normal' fullWidth variant='outlined' name='website'/>
<Button onClick={(e)=>addBook(e)} variant='contained' type='submit'>Add Product</Button>
</Box>
      </form>
    </div>
  )
}

export default AddBook