import React, { Component } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 1

    };
  }

  componentDidMount() {
    if(this.state.page !==2)
    axios
      .get("https://intense-tor-76305.herokuapp.com/merchants")
      .then((res) => {
        console.log(res);
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handlePage = (val) =>{
      this.setState({
          page :val
      })
  }
  render() {
    return (
      <div className="App">
        {this.state.page === 1 ? (
          <Page1 pageHandler={()=>this.handlePage(2)} posts={this.state.posts} page={this.state.page} />
        ) : (
          <Page2 pageHandler={()=>this.handlePage(1)} posts={this.state.posts} page={this.state.page} />
        )}
      </div>
    );
  }
}

export default App;
