import React, { useState } from  'react';
    
    
const UserConditional = (props) => {
    const [firstname, setFirstname] = useState("");
    const [titleError, setTitleError] = useState(""); 
    const [lastname, setLastname] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState(""); 
    const [passError, setPassError] = useState("");
    const [comfirmpassword, setComfirmpassword] = useState("");
    const [compassError, setComPassError] = useState("");
    
    
    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2){
            setTitleError("First Name must be 2 characters or longer!");
        }else {
            setTitleError("");
        }

        
    };

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2){
            setLastError("Last Name must be 2 characters or longer!");
        }else {
            setLastError("");
        }

    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Last Name must be 5 characters or longer!");
        }else {
            setEmailError("");
        }
   
    };


    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPassError("Last Name must be 8 characters or longer!");
        }else {
            setPassError("");
        }
   
    };

    const handleComPassword = (e) => {
        setComfirmpassword(e.target.value);
        if(e.target.value !== password){
            setComPassError("Password Must Match ");
        }else {
            setComPassError("");
        }
   
    };

    
    return(
        <form onSubmit={(e) => e.preventDefault()} >
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstname } />
                {
                    titleError ?
                    <p >{ titleError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastname } />
                {
                    lastError ?
                    <p >{ lastError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p >{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passError ?
                    <p >{ passError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Comfirm Password: </label>
                <input type="text" onChange={ handleComPassword } />
                {
                    compassError ?
                    <p >{ compassError }</p> :
                    ''
                }
            </div>
            <div>
                <h3>Your Form Data </h3>
            </div>
            <div>
                <p>First Name : {firstname}</p>
                <p>Last Name : {lastname}</p>
                <p>Emeil : {email}</p>
                <p>Password : {password}</p>
                <p>Comfirm Password : {comfirmpassword}</p>
            </div>
           
        </form>

    );
};
    
export default UserConditional;