import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      info: '',
    }
  }  
    handleInputChange = (value) => {
      this.setState({ info: value });
    }
  render() {
    return (
      <div className='App'>
        <input onChange={ (e) => this.handleInputChange(e.target.value)} type='text'/>
        <p>{this.state.info}</p>
      </div>
    );
  }
}

export default App;
