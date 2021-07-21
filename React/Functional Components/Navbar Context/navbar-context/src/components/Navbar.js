import React,{useContext} from 'react'
import MyContext from '../contexts/MyContext';

const Navbar = () => {
    const {name,setName}=useContext(MyContext)
    return (
        <div style={{padding:"20px",backgroundColor:"purple",color:"white",fontSize:"130%",fontWeight:"700",marginBottom:"2%"}}>
            Hello {name}
        </div>
    )
}

export default Navbar
