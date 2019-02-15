import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MainApp from './mainApp';




let getUsers = () => axios.get("https://jsonplaceholder.typicode.com/users")
let getComments = () => axios.get("https://jsonplaceholder.typicode.com/posts")


class App extends Component {
  state = {
    users: [],
    comments: []
  }

  componentDidMount() {
    axios.all([
      getUsers(),
      getComments()
    ])
      .then(axios.spread((user, comment) => {

        const users = user.data;
        const comments = comment.data;
        this.setState({ users, comments })
      }))
      .catch((err) => console.log(err))

  }

  render() {
    return <MainApp state={this.state} titleOne = {"userName"} titleTwo = {"Comments"}/>
  }
}

export default App;
