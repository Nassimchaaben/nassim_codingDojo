import React, { useState } from  'react';
    
    
const User = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [comfirmpassword, setComfirmpassword] = useState("");  
     
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password, comfirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser } >
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Comfirm Password: </label>
                <input type="text" onChange={ (e) => setComfirmpassword(e.target.value) } />
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
    
export default User;