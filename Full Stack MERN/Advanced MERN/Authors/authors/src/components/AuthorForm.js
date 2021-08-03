import React, { useState } from 'react'
import axios from 'axios';
import {Link,navigate} from '@reach/router';

const AuthorForm = () => {
    const [authorName, setAuthorName] = useState(""); 
    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = e => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/authors', {
            authorName
        })
            .then(res=>{
                console.log(res);
                setAuthorName("");
                navigate("/");
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })   
    }

    const cancel = (e) =>{
        navigate("/");
    }

    return (
        <>
            <h1>Favourite authors</h1>
            <Link to='/'>Home</Link>
            <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Author Name:</label><br/>
                    <input type="text" onChange={(e)=>setAuthorName(e.target.value)} value={authorName}/>
                </p>
                <input type="submit"/>
                <button onClick={(e)=>cancel(e)}>Cancel</button>
            </form>
        </>
    )
}

export default AuthorForm;