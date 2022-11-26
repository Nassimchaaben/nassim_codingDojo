import React, { useState } from 'react'


const FunctionalComponent = (props) => {
    // const [element, setElement] = useState(props.element)
    
    return (

        
        <div>
            <h1>{ props.firstname }, { props.lastname }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.HairColor }</p>
        
        </div>
    )
}

export default FunctionalComponent