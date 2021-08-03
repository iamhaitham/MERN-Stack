import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AuthorEdit= props => {
    const { id } = props;
    const [authorName, setAuthorName] = useState('');
    console.log(id);
    
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
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update an Author</h1>
            <form onSubmit={updateAuthor}>
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
export default AuthorEdit;