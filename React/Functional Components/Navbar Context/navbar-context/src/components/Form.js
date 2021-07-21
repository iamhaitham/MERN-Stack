import React,{useContext} from 'react'
import MyContext from '../contexts/MyContext';

const Form = () => {
    const {name,setName}=useContext(MyContext);
    
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    return (
        <div>
            <label htmlFor="myInput">Your Name:</label>
            <input type="text" id="myInput" onChange={(e)=>handleChange(e)} value={name}/>
        </div>
    )
}

export default Form
