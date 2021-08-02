import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleFormInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0){
      return this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.handleFormInput} name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.handleFormInput} name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
