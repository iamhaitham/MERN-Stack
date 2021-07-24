import React, { useState } from 'react'
import ToDo from '../components/ToDo';
import styles from '../Form.module.css';

const Form = () => {
    const [allTasks,setAllTasks]=useState([]);
    const [taskName,setTaskName]=useState("");
    const [isDisplayed,setIsDisplayed]=useState("none");

    const handleSubmit=(e)=>{
        e.preventDefault();
        setAllTasks(allTasks.concat([{"taskName":taskName,"taskStatus":"To do"}]));
        setTaskName("");
        setIsDisplayed("initial");
    }

    return (
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" placeholder="Enter a task" onChange={(e)=>setTaskName(e.target.value)} value={taskName}/>
                <input type="submit" value="Add Task"/>
            </form>
            
            <div style={{display:isDisplayed}}>
                <div className={styles.holders} style={{position:"absolute",left:"350px",top:"50px"}}>
                    <ToDo allTasks={allTasks.filter(task=>task.taskStatus==="To do")} setAllTasks={setAllTasks}/>
                </div>
            </div>
        </>
    )
}

export default Form
