import logo from './logo.svg';
import React from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';

import Person from './Person/Person';
import { useState } from 'react';

const  App  = () => {

  const [personState, setPersonState] =  useState({
    persons: [
      { name: 'max', age: '20' },
      { name: 'max', age: '20' }
    ]   
  });

  
  const [otherState,setOtherState] = useState('other state');


  const switchNamehandler = () => {
    setPersonState({
      persons: [
        { name: 'viajy', age: '20' },
        { name: 'max2', age: '20' }
      ]
    })
  }

  const nameChangeHandle = (event) =>{
    setPersonState({
      persons: [
        { name: event.target.value, age: '29' },
        { name: 'max2', age: '20' }
      ]
    })
  }

  const styleObj = {
    "backgroundColor": "green", 
    "border": "none",
    "color": "white",
    "padding": "15px 32px",
    "textAlign": "center",
    "textDecoration": "none",
    "display": "inline-block",
    "fontSize": "16px"
  }
  
    return (

      <div className="App">
        I am in APP
        <button 
        style={styleObj} 
        onClick={switchNamehandler}
        >Switch Name</button>
        
        change Person : 
        <Person 
        name={personState.persons[0].name} 
        age={personState.persons[0].age} 
        click={switchNamehandler} 
        change={nameChangeHandle} />
        
       
       
      </div>

      // return React.createElement('div',{className:'App'},React.createElement('h1','', 'I am here'));
    );
  }


export default App;
