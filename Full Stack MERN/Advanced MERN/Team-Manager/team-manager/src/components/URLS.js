import React from 'react'
import ButtonsMUI from './ButtonsMUI';
import styles from '../header.module.css';

const URLS = () => {
    return (
        <>
            <div>
                {/* <Link>Manage Players Status</Link> */} 
            </div>
            
            <div className={styles.header}>
                <ButtonsMUI buttonName={"List"} buttonDestination={"/players/list"}></ButtonsMUI>
                <ButtonsMUI buttonName={"Add Player"} buttonDestination={"/players/addplayer"}></ButtonsMUI>
            </div>
        </>
    )
}

export default URLS
