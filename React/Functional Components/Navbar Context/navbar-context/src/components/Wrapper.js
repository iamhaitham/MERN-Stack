import React,{useState} from 'react'
import MyContext from '../contexts/MyContext';

const Wrapper = (props) => {
    const [name,setName] = useState("Bob Smith");
    const {children}=props;

    return (
            <MyContext.Provider value={{name,setName}}>
                {children}
            </MyContext.Provider>
    )
}

export default Wrapper
