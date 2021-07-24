import React,{useState} from 'react'
import styles from '../TaskHolder.module.css';
import Doing from '../components/Doing';

const ToDo = (props) => {
    const {allTasks,setAllTasks} =props;
    const [doing,setDoing]=useState([]);
    const [isDisplayed,setIsDisplayed]=useState("none");

    const changeToDo=(e,index)=>{
        const updatedToDo=allTasks.map((task,i)=>{
            if(i===index){
                const updatedTask={...task,"taskStatus":"Doing"};
                setDoing(doing.concat(updatedTask));
                setIsDisplayed("initial");
                return updatedTask;
            }else{
                return {...task};
            }
        })
        setAllTasks(updatedToDo.filter(task=>task.taskStatus==="To do"));
    }
    
    return (
        <div>
            <h1 className={styles.heading}>To Do</h1>
            <div className={styles.taskHolder}>
                {allTasks.map((task,index)=>
                <div className={styles.singleTask} key={index}>
                    <span className={styles.spanInTaskHolder}>{task.taskName}</span>
                    <button onClick={(e)=>changeToDo(e,index)}>Start doing</button>
                </div>
                )}
            </div>
            
            <div style={{display:isDisplayed,position:"absolute",left:"350px",top:"0px"}}>
                <Doing doing={doing} setDoing={setDoing}/>
            </div>
        </div>
    )
}

export default ToDo
