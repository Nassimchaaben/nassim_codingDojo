


import React, { Component } from 'react'

export default class Putting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            age:this.props.age // (6)
        }
    }
hi() {
        
        this.setState({
             age:this.state.age + 1
            },() => console.log(this.state.age))
    }
        
  render() {
                
            return(
                <div >
                  <h1>{this.props.firstname}, {this.props.lastname}</h1>
                  <p>age: {this.state.age}</p>
                  <p>Hair Color: {this.props.HairColor}</p>
                  <button onClick={() => { this.hi() }}>Birthday Button for {this.props.firstname}, {this.props.lastname}</button><br />
                </div>
                )
  }
}