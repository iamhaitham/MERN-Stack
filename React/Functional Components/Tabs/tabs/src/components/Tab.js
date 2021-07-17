import React,{useState} from 'react'
import styles from '../tabs.module.css';
import Content from '../components/Content';
import 'materialize-css/dist/css/materialize.min.css';
import '../App.css';

const Tab = (props) => {
    const [content,setContent]=useState("");
    const [myBorder,setMyBorder]=useState("none");

    const handleClickedLabel=(e,content)=>{
        setContent(content)
        setMyBorder("2px solid #26a69a");
    }

    return (
        <div>
            <ul className={styles.myLabelsContainer}>
                {props.allTabs.map(tab=><button className="waves-effect waves-light btn myLabels"  onClick={(e)=>handleClickedLabel(e,tab.content)}>{tab.label}</button>)}
            </ul>
            <Content content={content} myBorder={myBorder}/>
        </div>
    )
}

export default Tab
