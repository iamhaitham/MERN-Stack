import React,{useEffect} from 'react'
import URLS from '../components/URLS';
import Confirm from '../components/Confirm';
import axios from 'axios';
import TableMUI from '../components/TableMUI';

const ListPlayers = (props) => {
    const {players} = props;

    const deletePlayer = (e,personId) => {
        axios.delete('http://localhost:8000/api/players/' + personId)
            .then(res => {
                console.log("Deleted Successfully!");
            })
    }

    return (
        <>
            <URLS/>
            <TableMUI players={players}/>
        </>
    )
}

export default ListPlayers;
