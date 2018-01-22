import React, { Component } from 'react';
import Child from  './child';
 

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
        <h5>Received from Child:<br />{this.state.fromChild}</h5>
     </React.Fragment>
    );
  }
}

export default App;