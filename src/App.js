import React, { Component } from 'react';
import Child from  './child';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: purple;
`;

<Title>Hello World</Title> 

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      fromChild: ''
    };
  }
  
  handleData=(name) => {
    this.setState({
      fromChild: name
    });
  }
  
  render() {
    return (
     <React.Fragment>
        <Child handlerFromParent={this.handleData} /> 
        <Title>Received from Child:<br />{this.state.fromChild}</Title>
     </React.Fragment>
    );
  }
}

export default App;