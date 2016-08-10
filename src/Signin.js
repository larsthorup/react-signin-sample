import React, { Component } from 'react';

class Signin extends Component {
  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Signin</button>
      </form>
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signingIn();
  }
}

export default Signin;