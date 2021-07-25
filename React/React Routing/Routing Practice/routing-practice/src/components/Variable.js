import React,{useState} from 'react'

const Variable = (props) => {
    const {variable} =props;
    var {color1,color2}=props;
    var myFontSize;

    if(color1===undefined && color2===undefined){
        color1="black"
        color2="white"
        myFontSize="initial"
    }else{
        myFontSize="50px";
    }

    return (
        <div>
        {!isNaN(variable) &&
            <p>The number is {variable}</p>
        }

        {isNaN(variable) &&
            <p style={{color:color1,backgroundColor:color2,fontSize:myFontSize}}>The word is {variable}</p>
        }
        </div>
    )
}

export default Variable
