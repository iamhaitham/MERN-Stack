import React,{useState} from 'react'
import styles from '../form.module.css';
import CreateBox from './CreateBox';
import '../bootstrap.css';

const Color = (props) => {
    const [color,setColor]=useState("");
    const [width,setWidth]=useState(10);
    const [height,setHeight]=useState(10);
    const [boxes,setBoxes]=useState([]);
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setColor(e.target.value);
    }

    const handleWidth=(e)=>{
        setWidth(e.target.value);
    }

    const handleHeight=(e)=>{
        setHeight(e.target.value);
    }

    const handleSubmission=(e)=>{
        // Prevent the webpage from reloading
        e.preventDefault();

        // Note that I am concatinating CreateBox Component and passing the color as props
        setBoxes(boxes.concat([<CreateBox myColor={color} myWidth={width} myHeight={height}/>]));

        // Revert the text input back to empty 
        setIsSubmitted(true);
        if(isSubmitted){
            setColor("");
            setWidth(10);
            setHeight(10);
        }
    }

    return (
        <div>
            <form className={styles.myForm} onSubmit={(e)=>handleSubmission(e)}>
                <label htmlFor="myInput">Color:</label>
                <input id="myInput" type="text" onChange={(e)=>handleChange(e)} value={color}/>
                
                <label htmlFor="myWidth">Width:</label>
                <input id="myWidth" type="number" onChange={(e)=>handleWidth(e)} value={width}/>
                
                <label htmlFor="myHeight">Height:</label>
                <input id="myHeight" type="number" onChange={(e)=>handleHeight(e)} value={height}/>
                
                <input type="submit" value="Add" className="btn btn-primary"/>
            </form>

            <div className={styles.displayedBoxes}>{boxes}</div>
        </div>
        
    )
}

export default Color
