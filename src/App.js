import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';
import Signin from './Signin';

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Intro = styled.p`
  font-size: large;
`;

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const Div = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Div>
        <Header>
          <Logo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <Signin signingIn={({account}) => alert(`signing in as ${account}`)}/>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Div>
    );
  }
}

export default App;
