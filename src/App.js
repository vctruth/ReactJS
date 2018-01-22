import React, { Component } from 'react';
import Child from  './child';
import  styled  from 'styled-components';
import {injectGlobal } from 'styled-components';

 injectGlobal `
  body {
    background-color: ghostwhite;
    padding: 0;
    margin: 0;
    font-family: cursive;
  }
`
const mainColor = 'indianred'
const Title = styled.h1`
  color: ${props => props.color ||  'goldenrod'};
  font-size: 2.8em;
  margin: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
`;
const Head = styled.h3`
  font-size: 2em;
  color: goldenrod;
`;
const Dtitle = styled.h1`
  font-size: 1.5em;
  color: ${props => props.primary ? 'blue' : 'indianred'};
`;
const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Thumbnail = styled.img`
  flex-grow: 1;
  width: 50px;
  height: 100px;
  padding: 5px;
  margin: 15px;
  border: 1px solid ${mainColor};
  border-radius: 8px;
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
    
    const thumbnails = Array.from({ length: 5 }, (_, index) => {
    return <Thumbnail key={index + 1} src={require(`./thumbnails/images-${index + 1}.png`)} />;
  });

    return (
     <React.Fragment className={this.props.className}>
        <Head> Testing sytled components </Head>
        <Child handlerFromParent={this.handleData} /> 
        <Title>Received from Child:<br />{this.state.fromChild}</Title>
        <Dtitle> this is dtitle </Dtitle>
        <Gallery>
          {thumbnails}
        </Gallery>
        
     </React.Fragment>
    );
  }
}

export default styled(App)`
  width:  20vw;
  height: 20vh;
  text-align: center;
`;