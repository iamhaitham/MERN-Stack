import React,{useState} from 'react'
import DisplayTasks from '../components/DisplayTasks';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    const [newTask,setNewTask]=useState("");
    const [tasks,setTasks]=useState([]);
    const myTask={"taskDesc":newTask,"isChecked":false,"isSlashed":"none"};

    const onChanging=(e)=>{
        setNewTask(e.target.value);
    }

    const onAdding=(e)=>{
        e.preventDefault();
        if(newTask.length!==0){
            setTasks(tasks.concat([myTask]));
        }
        setNewTask("");
    }

    return (
        <>
        <form onSubmit={(e)=>onAdding(e)}>
            <input type="text" placeholder="Enter a task" className="form-control" id="myInput" onChange={(e)=>onChanging(e)} value={newTask}/>
            <input type="submit" value="Add" className="btn btn-success"/>
        </form>
        
        <DisplayTasks tasks={tasks} setTasks={setTasks}/>
        </>
    )
}

export default Form
