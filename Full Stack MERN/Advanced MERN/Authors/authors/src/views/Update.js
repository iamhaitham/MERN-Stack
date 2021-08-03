import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Update= props => {
    const { id } = props;
    const [authorName, setAuthorName] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthorName(res.data.authorName);
            })
    }, [])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            authorName,
        })
            .then(res => {navigate('/');
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
    
    return (
        <div>
            <h1>Update an Author</h1>
            <Link to="/">Home</Link>
            <form onSubmit={updateAuthor}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Author Name</label><br />
                    <input type="text" 
                    name="authorName" 
                    value={authorName} 
                    onChange={(e) => { setAuthorName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;