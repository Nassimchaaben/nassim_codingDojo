import React, { Component } from 'react'
const myElement = "Hello Dojo!!";
const myElement2 = "Things I need to to";
const myElement3 = ['Learn React',`Climb Mt.Everest`,`Run a Marathon`,`Feed the dogs`];
 class NewComponent extends Component {
  render() {
    return (
    <> 
        <h1>{myElement}</h1>
        <p>{myElement2}</p>
        <ul>{myElement3.map(element=><li>{element}</li>)}</ul> 
    </>
    )
  }
}

export default NewComponent;