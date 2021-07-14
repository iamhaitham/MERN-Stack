import React,{useState} from 'react';
import styles from '../moreform.module.css';

const MoreForms=()=>{
    const [firstName,setFirstName]=useState("");
    const [firstNameMsg,setFirstNameMsg]=useState(false);
    const [lastName,setLastName]=useState("");
    const [lastNameMsg,setLastNameMsg]=useState(false);
    const [email,setEmail]=useState("");
    const [emailMsg,setEmailMsg]=useState(false);
    const [password,setPassword]=useState("");
    const [passwordMsg,setPasswordMsg]=useState(false);
    const [confirmPassword,setConfirmPassword]=useState("");
    const [confirmPasswordMsg,setConfirmPasswordMsg]=useState(false);
    
    const handleFirstName=(e)=>{
        setFirstName(e.target.value);
        if(e.target.value.length<2){
            setFirstNameMsg(<p className={styles.errors}>First Name must be at least 2 characters!</p>);
        }else{
            setFirstNameMsg(<></>);
        }
        if(e.target.value.length===0){
            setFirstNameMsg(<></>);
        }
    }

    const handleLastName=(e)=>{
        setLastName(e.target.value);
        if(e.target.value.length<2){
            setLastNameMsg(<p className={styles.errors}>Last Name must be at least 2 characters!</p>);
        }else{
            setLastNameMsg(<></>);
        }
        if(e.target.value.length===0){
            setLastNameMsg(<></>);
        }
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<5){
            setEmailMsg(<p className={styles.errors}>Email must be at least 5 characters!</p>);
        }else{
            setEmailMsg(<></>);
        }
        if(e.target.value.length===0){
            setEmailMsg(<></>);
        }
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setPasswordMsg(<p className={styles.errors}>Password must be at least 8 characters!</p>)
        }else{
            setPasswordMsg(<></>);
        }
        if(e.target.value.length===0){
            setPasswordMsg(<></>);
        }
    }

    const handleConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value);
        if(e.target.value!==password){
            setConfirmPasswordMsg(<p className={styles.errors}>Passwords must match!</p>);
        }else{
            setConfirmPasswordMsg(<></>);
        }
        if(e.target.value.length===0){
            setConfirmPasswordMsg(<></>);
        }
    }

    return(
        <form onSubmit={(e)=>e.preventDefault()} className={styles.myForm}>
            
            {firstNameMsg}
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" onChange={handleFirstName} value={firstName}/>
            
            {lastNameMsg}
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" onChange={handleLastName} value={lastName}/>

            {emailMsg}
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={handleEmail} value={email}/>

            {passwordMsg}
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={handlePassword} value={password}/>
            
            {confirmPasswordMsg}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" type="password" onChange={handleConfirmPassword} value={confirmPassword}/>
            </form>
    );
}

export default MoreForms;