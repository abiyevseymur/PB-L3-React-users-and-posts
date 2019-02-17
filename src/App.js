import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/posts';
import Users from './components/users';




let getUsers = () => axios.get("https://jsonplaceholder.typicode.com/users")
let getComments = () => axios.get("https://jsonplaceholder.typicode.com/posts")


class App extends Component {
  state = {
    users: [],
    comments: [],
    titleUsers: ["ID", "Users","Username","e-mail","City","Street","Phone","Website","Company"],
    titlePosts: ["UserID","ID","Title","Body"]
  }

  componentDidMount() {
    axios.all([
      getUsers(),
      getComments()
    ])
      .then((response) => {
        const users = response[0].data;
        const comments = response[1].data;
        return this.setState({ users, comments })
      })
      .catch((err) => console.log(err))
  }

  render() {
    return <>
    <Users state = {this.state}/>
    <Posts state = {this.state}/> 
    </>
    
  }
}

export default App;
