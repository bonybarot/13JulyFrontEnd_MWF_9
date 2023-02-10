import React from 'react';
import { useState } from 'react';

const CustomHook = (intVal,initError) => {
    const [inp,setInput] = useState(intVal)
    const [errors,setError] = useState(initError)
    const handleChange = (e)=>{
        // setInput((inp)=>({[e.target.name]:e.target.value}))
        setInput((inp)=>({...inp,[e.target.name]:e.target.value}))
        console.log("called from Hook"); 
        if (e.target.name == "username") {
            if (e.target.value == "") {
                setError({...errors,"usernameError":"User Name is required"})
            } else {
                setError({...errors,"usernameError":""})
            } 
        }
    }
    return {
        inp,
        handleChange,
        errors
    };
};

export default CustomHook;