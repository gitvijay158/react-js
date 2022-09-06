import logo from './logo.svg';
import React, { Component } from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'max', age: '20' },
      { name: 'max', age: '20' }
    ],
    otherstate: 'other state'
  };

  



  switchNamehandler = () => {
    this.setState({
      persons: [
        { name: 'viajy', age: '20' },
        { name: 'max2', age: '20' }
      ]
    })
  }

  render() {
    return (

      <div className="App">
        I am in APP
        <button onClick={this.switchNamehandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name="ramesh" age="32" />
        <Person name="rameshu" age="32"> I am props children </Person>
      </div>

      // return React.createElement('div',{className:'App'},React.createElement('h1','', 'I am here'));
    );
  }
}

export default App;
