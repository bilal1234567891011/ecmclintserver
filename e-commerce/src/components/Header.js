import {React,useState} from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink} from 'react-router-dom'
import { Button } from '@mui/material'
import './header.css'
// import DrawerComp from './DrawerComp';

function Header() {
    const [value,setvalue]=useState()
  return (
    <div>
        <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky' className='nav'>
            <Toolbar><Typography><LibraryBooksIcon></LibraryBooksIcon></Typography>
            <Tabs sx={{ ml:"auto"}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setvalue(val)}>
               <Tab LinkComponent={NavLink} to ="/add" label="Add product" />
               <Tab LinkComponent={NavLink} to ="/" label="Products" />
            </Tabs> 
            
</Toolbar>
{/* <DrawerComp/> */}
        </AppBar>
    </div>
  )
}

export default Header

//https://i.postimg.cc/RhYd67Nk/download-6.jpg
//https://www.flipkart.com/ocean-end-lane/p/itmfbydp53r3rsv8?pid=9780062255655&lid=LSTBOK97800622556550HBWLY&marketplace=FLIPKART&q=the+ocean+at+the+end+of+the+lane&store=bks&srno=s_1_5&otracker=AS_QueryStore_OrganicAutoSuggest_1_24_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_24_na_na_na&fm=Search&iid=bbd1eaf9-ec31-426f-909c-ed6fa5265e54.9780062255655.SEARCH&ppt=pp&ppn=pp&ssid=pc0czhipds0000001684075475373&qH=b57bc6cbc7df2d36
//The Ocean at the End of the Lane 
//NEIL GAIMAN
//It tells the story of a man who returns to Sussex for a funeral and then finds himself driving "randomly" to the scenes of his childhood