import React, { Component } from 'react';

class Signin extends Component {
  constructor () {
    super();
    this.state = {account: ''};
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange}/>
        <button type="submit">Sign In</button>
      </form>
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signingIn(this.state);
  }

  onChange = (e) => {
    this.setState({account: e.target.value});
  }
}

export default Signin;