import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';

const Form = (props) => {
    var {by,id} =props;
    const [selectedBy,setSelectedBy]=useState("people");
    const [selectedId,setSelectedId]=useState(1);
    const [apiArray,setApiArray]=useState([]);
    const [customizedError,setCustomizedError]=useState("");
    const [customizedErrorPicture,setCustomizedErrorPicture]=useState("");
    const allIDs=[];
    for(let i=1;i<=82;i++){ //82 is the total number of people. However, the number of planets is only 60 so no results will appear for planets 61-82
        allIDs.push(i);
    }

    useEffect(()=>{
        axios.get("https://swapi.dev/api/"+by+"/"+id+"/")
        .then((response)=>{
            setApiArray(response.data);
            setCustomizedError("");
            setCustomizedErrorPicture("");
            
        })
        .catch((error)=>{
            setCustomizedError("These aren't the droids you're looking for");
            setCustomizedErrorPicture("https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg");
            console.error(error);
        })
    },[id,by]);

    const search=(e)=>{
        e.preventDefault();
        navigate(`http://localhost:3000/${selectedBy}/${selectedId}`);
    }

    return (
        <>
            <form onSubmit={(e)=>search(e)}>
                <div>
                    <label>Search for:</label>
                    <select onChange={(e)=>setSelectedBy(e.target.value)} value={selectedBy}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>

                <div>
                    <label>ID:</label>
                    <select onChange={(e)=>setSelectedId(e.target.value)} value={selectedId}>
                        {allIDs.map((someId,index)=>
                            <option key={index} value={someId}>{someId}</option>
                        )}
                    </select>
                </div>
                <input type="submit" value="Search!"/>
            </form>

            {customizedError.length>0 &&
                <div>
                    <p style={{color:"red",fontWeight:700,fontSize:"120%"}}>error: {customizedError}</p>
                    <img src={customizedErrorPicture} alt="Obi-Wan Kenobi" style={{width:"150px",height:"150px"}}/>
                </div>
            }
        
        {by==="people" &&
            <>
                <h1>{apiArray.name}</h1>
                <p><b>Height:</b> {apiArray.height}</p>
                <p><b>Mass:</b> {apiArray.mass}</p>
                <p><b>Hair Color:</b> {apiArray.hair_color}</p>
                <p><b>Skin Color:</b> {apiArray.skin_color}</p>
            </>
        }

        {by==="planets" &&
            <>
                <h1>{apiArray.name}</h1>
                <p><b>Climate:</b> {apiArray.climate}</p>
                <p><b>Terrain:</b> {apiArray.terrain}</p>
                <p><b>Surface Water:</b> {apiArray.surface_water}</p>
                <p><b>Population:</b> {apiArray.population}</p>
            </>
        }
        </>
    )
}

export default Form
