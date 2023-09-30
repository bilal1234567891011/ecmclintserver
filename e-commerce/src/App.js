import './App.css';
// import Header from './components/Header';
import{Route,Routes, useNavigate} from 'react-router-dom'
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './About';
import Edit from './Edit';
import View from './components/View';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [uname,setUname]=useState("")
const [password,setPassword]=useState("")
let location=useNavigate()

// console.log(email);
const Login=async (e)=>{
  e.preventDefault()
  const body={
    uname,
    password
  } 
  try{
  const result=await axios.post('http://localhost:8000/Login',body)
if(result.data.message=="Login Success"){
location('/home',{state:{id:uname}})
}
else if(result.data.message=="Incorrect psw or uname"){
  alert('user have not sign up')
}
  }
  catch(e){
    console.log(e);
  }
}

  return (
    <div>

  {/* <Header></Header> */}

<Routes>

  <Route path='/' element={<Books></Books>}></Route>

  <Route path='/add' element={<AddBook></AddBook>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/edit/:id' element={<Edit></Edit>}></Route>
  <Route path='/view/:id' element={<View></View>}></Route>  



</Routes>

    </div>
  );
}

export default App;
