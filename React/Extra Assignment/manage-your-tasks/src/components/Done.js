import React from 'react'
import styles from '../TaskHolder.module.css';

const Done = (props) => {
    const {done,setDone}=props;

    const deleteTask=(e,index)=>{
        const updatedDone=done.map((task,i)=>{
            if(index===i){
                const updatedTask={...task,"taskStatus":"Deleted"};
                return updatedTask;
            }else{
                return {...task};
            }
        })
        return setDone(updatedDone.filter(task=>task.taskStatus==="Done"));
    }

    return (
        <div style={{position:"absolute",left:"350px",top:"0px"}}>
            <h1 className={styles.heading}>Done</h1>
            <div className={styles.taskHolder}>
                {done.map((task,index)=>
                <div className={styles.singleTask} key={index}>
                    <span className={styles.spanInTaskHolder}>{task.taskName}</span>
                    <button onClick={(e)=>deleteTask(e,index)}>Delete</button>
                </div>
                )}
            </div>
        </div>
    )
}

export default Done
