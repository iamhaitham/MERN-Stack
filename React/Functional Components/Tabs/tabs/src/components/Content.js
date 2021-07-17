import React from 'react'
import styles from '../tabs.module.css';

const Content = (props) => {
    return (
        <div className={styles.myContent} style={{border:props.myBorder}}>
            {props.content}
        </div>
    )
}

export default Content
