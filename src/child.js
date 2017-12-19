import React, { Component } from "react";

class Child extends React.Component {
   
 Abc = () => {
    this.props.handlerFromParent("Varughese")
 }
  render() {
    return (
      <div>
       <button onClick={this.Abc}> ClickMe </button>
      </div>
    );
  }
}

export default Child;
