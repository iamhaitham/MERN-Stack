import React, { useState } from 'react'

const Form=(props)=>{
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confPassword,setConfPassword] = useState("");

    return(
        <>
            <form className="myForm">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>

                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>

                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>

                <label htmlFor="confPassword">Confirm Password</label>
                <input id="confPassword" type="password" onChange={(e)=>setConfPassword(e.target.value)} value={confPassword}/>
            </form>

            <div>
                <h2>Your form data:</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confPassword}</p>
            </div>
        </>
    );
}

export default Form;
