import React, { useEffect, useState } from 'react'
import ListPlayers from '../components/ListPlayers';
import axios from 'axios';

const List = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            });
    },[players])

    return (
        <div>
           {loaded && <ListPlayers players={players}/>}
        </div>
    )
}

export default List;