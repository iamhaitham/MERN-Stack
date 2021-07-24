import React,{useState} from 'react'
import styles from '../TaskHolder.module.css';
import Done from '../components/Done';

const Doing = (props) => {
    const {doing,setDoing} =props;
    const [done,setDone]=useState([]);
    const [isDisplayed,setIsDisplayed]=useState("none");

    const changeDoing=(e,index)=>{
        const updatedDoing=doing.map((task,i)=>{
            if(index===i){
                const updatedTask={...task,"taskStatus":"Done"};
                setDone(done.concat(updatedTask));
                setIsDisplayed("initial");
                return updatedTask;
            }else{
                return {...task};
            }
        })
        setDoing(updatedDoing.filter(task=>task.taskStatus==="Doing"));
    }
    
    return (
        <div>
            <h1 className={styles.heading}>Doing</h1>
            <div className={styles.taskHolder}>
                {doing.map((task,index)=>
                <div className={styles.singleTask} key={index}>
                    <span className={styles.spanInTaskHolder}>{task.taskName}</span>
                    <button onClick={(e)=>changeDoing(e,index)}>Done</button>
                </div>
                )}
            </div>

            <div style={{display:isDisplayed}}>
                <Done done={done} setDone={setDone}/>
            </div>
        </div>
    )
}

export default Doing
