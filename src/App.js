import React, { Component } from 'react';
import Child from  './child';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: purple;
`;
const Head = styled.h3`
  font-size: 2em;
  color: goldenrod;
`;
const Dtitle = styled.h1`
  font-size: 1.5em;
  color: ${props => props.primary ? 'blue' : 'indianred'};
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
        <Head> Testing sytled components </Head>
        <Child handlerFromParent={this.handleData} /> 
        <Title>Received from Child:<br />{this.state.fromChild}</Title>
        <Dtitle> this is dtitle </Dtitle>
     </React.Fragment>
    );
  }
}

export default App;