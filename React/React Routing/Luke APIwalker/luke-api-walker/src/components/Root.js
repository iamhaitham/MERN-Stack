import React,{useEffect} from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';

const Root = () => {
    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/1/")
        .then((response)=>{
            navigate('/people/1')
        }
        )
        .catch((error)=>console.error(error))
    },[]);
    return (
        <div>
            
        </div>
    )
}

export default Root
