import React, { Component, useEffect, useState } from 'react'
import Hahaha from './Components/Image';

class App extends Component {
  

  
  constructor(props) {
    super(props);
    this.state = {
      fullname: "Mohamed Ali Hammami",
      bio: "I don't know what i'm doing",
      img:<Hahaha/>,
      profession: "webdevelopper ",
      count:0}
    }


    state={divcontainer:false}
  render() {
    const {count}=this.state


    var Handlechange = e => {
      this.setState({divcontainer:!this.state.divcontainer})
    }
    const x=this.state.divcontainer;

    return (
      <div> 
        <button onClick={Handlechange}>{x?'Hide':'Show'}</button>
          {x &&(<div>
              
          <center>
          
          <h1 >My name is {this.state.fullname}</h1>
          <p>something i want to say {this.state.bio}</p>
          <p>I want to be {this.state.profession}</p>
          <p>here is a picture . {this.state.img}</p>
          <h2>{count}</h2>
           </center>
      </div>)}
      </div>
    )
  }

  

  componentDidMount () {
  this.myInterval = setInterval(()=>{
    this.setState(prevState => ({
      count: this.state.count +1
    }))
  },1000)
}
}

export default App;