import React from 'react';

const PersonCard = (props)=>{
    return(
        <div>
            <h1>{props.lastName}, {props.lastName}</h1>
            <p>age: {props.age}</p>
            <p>hair color: {props.hairColor}</p>
        </div>
    );
}

export default PersonCard;