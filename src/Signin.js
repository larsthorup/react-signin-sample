import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-color: ${props => props.type === 'submit' ? 'red' : 'black'};
`;

const Input = styled.input`
  color: blue;
`;

class Signin extends Component {
  constructor () {
    super();
    this.state = {account: ''};
  }

  render () {
    return (
      <form className={this.props.className} onSubmit={this.onSubmit}>
        <Input type="text" onChange={this.onChange}/>
        <Button type="submit">Sign In</Button>
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

export default styled(Signin)`
  background-color: orange;
`;


// Note: these are the same styled components using plain ES5
/* const Button = */ styled('button')(
['border-color: ', ';'],
function (props) {
  return props.type === 'submit' ? 'red' : 'black';
}
);

/* const Input = */ styled('input')(['color: green;'])
