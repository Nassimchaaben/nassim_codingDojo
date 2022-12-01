import React from 'react';
import { useParams } from 'react-router-dom';



const Number = (props) => {
    const {number} = useParams ();
    
    return (
        <div >
           {isNaN(number)?<h1>This Word is : {number}</h1> :  <h1>This Number is : {number} </h1> }
        </div>
    )
}

export default Number