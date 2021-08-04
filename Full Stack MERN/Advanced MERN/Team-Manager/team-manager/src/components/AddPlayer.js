import React,{useState} from 'react'
import { navigate} from '@reach/router';
import axios from 'axios';
import URLS from '../components/URLS';

const AddPlayer = () => {
    const [playerName,setPlayerName]=useState("");
    const [playerPosition,setPlayerPosition]=useState("");
    const [errors, setErrors] = useState([]); 
    const [isDisplayed,setIsDisplayed]=useState("none");
    const [isDisabled,setIsDisabled]=useState(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', {
            playerName,
            playerPosition
        })
            .then(res=>{
                console.log(res);
                setIsDisplayed("none");
                navigate("/players/list");
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                setIsDisplayed("initial");
            })  
        setPlayerName("");
        setPlayerPosition("");
    }

    const handlePlayerName=(e)=>{
        setPlayerName(e.target.value);
        if(e.target.value.length>2){
            setIsDisabled(false);
        }else{
            setIsDisabled(true);
        }
    }

    return (
        <>
            <URLS/>
            <form onSubmit={(e)=>onSubmitHandler(e)}>
                <h1>Add Player</h1>

                <label htmlFor="playername">Player Name:</label>
                <input id="playername" type="text" onChange={handlePlayerName} value={playerName}/>
                {errors.map((err, index) => <p key={index} style={{color:"red",display:isDisplayed}}>{err}</p>)}

                <label htmlFor="favouriteposition">Favourite Position:</label>
                <input id="favouriteposition" type="text" onChange={(e)=>setPlayerPosition(e.target.value)} value={playerPosition}/>
                
                <button disabled={isDisabled}>Add</button>
            </form>
        </>
    )
}

export default AddPlayer;
