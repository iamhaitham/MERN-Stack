import React,{useState, useEffect} from 'react'
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const AuthorsList = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            });
    },[authors])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <>
            <h1>Favourite authors</h1>  
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {authors.sort((a, b) => a.authorName.localeCompare(b.authorName)).map((author, idx)=>{
                return <tr key={idx}>
                    <td>{author.authorName}</td>
                    <td><Link to={`/edit/${author._id}`}><button>Edit</button></Link> <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/></td>
                </tr>
                })}
                </tbody>
            </table>  
        </>
    )
}

export default AuthorsList;
