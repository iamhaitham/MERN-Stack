import React,{useState} from 'react'

const Tips = () => {
    const [likes,setLikes]=useState(0);
    const [isLiked,setIsLiked]=useState(false);

    const IncrementLike=(e)=>{
        setLikes(likes+1);
        setIsLiked(true);
    }

    const DecrementLike=(e)=>{
        setLikes(likes-1);
        setIsLiked(false);
    }

    return (
        <div style={{position:"absolute",top:"450px",left:"350px"}}>
            <h1>Tips for productivity</h1>
            <div>
                <p>Five-minutes rule</p>
                
                {!isLiked && 
                <button onClick={(e)=>IncrementLike(e)}>Like this tip</button>
                }

                {isLiked && 
                <button onClick={(e)=>DecrementLike(e)}>Dislike</button>
                }

                <p>Likes: {likes}</p>
                <p>Description: make a deal with yourself to do at least five minutes of a task.</p>
            </div>
        </div>
    )
}

export default Tips
