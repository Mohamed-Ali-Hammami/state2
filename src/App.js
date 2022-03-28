import React, { Component } from "react";
import Hahaha from "./Components/Image";

class App extends Component {

  state = {
    fullname: "Mohamed Ali Hammami",
    bio: "I don't know what i'm doing",
    img: <Hahaha />,
    profession: "webdevelopper ",
    count: 0,
    divcontainer: false,
  };
 

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        count: this.state.count + 1,
      }));
    }, 1000);
  }



  Handlechange = () => {
    return this.setState({
      divcontainer: !this.state.divcontainer,
      count: this.state.count = 0,
    });
  };
  
  render() {
    const { count } = this.state;


    return (
      <div>
        <button onClick={this.Handlechange}>
          {this.state.divcontainer ? "Hide" : "Show"}
        </button>
        {this.state.divcontainer && (
          <div>
            <center>
              <h1>My name is {this.state.fullname}</h1>
              <p>something i want to say {this.state.bio}</p>
              <p>I want to be {this.state.profession}</p>
              <p>here is a picture . {this.state.img}</p>
              <h2>{count}</h2>
            </center>
          </div>
        )}
      </div>
    );
  }
}

export default App;
