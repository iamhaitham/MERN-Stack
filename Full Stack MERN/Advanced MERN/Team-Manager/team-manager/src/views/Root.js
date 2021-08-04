import React,{useEffect,useState} from 'react'
import { navigate } from '@reach/router'
import List from './List';
import axios from 'axios';


const Root = () => {
    const [players, setPlayers] = useState([]);
    navigate("/players/list");

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
            });
    },[])

    return (
        <List players={players}/>
    )
}

export default Root
