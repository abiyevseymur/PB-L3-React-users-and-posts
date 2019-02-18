import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/posts';
import Users from './components/users';
import JsonHolder from './Api/jsonplaceholder'



class App extends Component {
  state = {
    users: [],
    comments: [],
    titleUsers: [ "Users", "Username", "e-mail", "City", "Street", "Phone", "Website", "Company"],
    titlePosts: ["UserID", "Title", "Body"]
  }

  componentDidMount() {
    axios.all([
      JsonHolder("/users"),
      JsonHolder("/posts")
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
      <Users state={this.state} />
      <Posts state={this.state} />
    </>

  }
}

export default App;
