import React, { Component } from "react";
import axios from 'axios'


class createUser extends Component {
  state = {
    username: "",
  };

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
 
    console.log(user);
    const baseURI = 'http://localhost:5000'
    axios.post(`${baseURI}/users/add`, user)
        .then(res => console.log(res.data))

    this.setState({username:''})
  };

  render() {
    return (
      <div>
        <h1>Create New User:</h1>
        <form onSubmit = {this.onSubmit}>
            <div className = 'form-group'>
                <label>Username:</label>
                <input 
                    required
                    type = 'text'
                    value = {this.state.username}
                    onChange = {this.onChangeUsername}
                />
            </div>
            <div className = 'form-group'>
                <input type = 'submit' value = 'Create User' className = 'btn btn-primary'/>
            </div>
        </form>
      </div>
    );
  }
}

export default createUser;