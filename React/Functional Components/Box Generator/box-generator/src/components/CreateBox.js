import React from 'react'
import styles from '../form.module.css';

const CreateBox = (props) => {
    
    return (
        <div className={styles.box} style={{backgroundColor:props.myColor,width:props.myWidth+"px",height:props.myHeight+"px"}}>
        </div>
    )
}

export default CreateBox
