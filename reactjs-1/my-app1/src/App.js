import logo from './logo.svg';
import React from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';

import Person from './Person/Person';
import { useState } from 'react';

const App = () => {

  const [personState, setPersonState] = useState({
    persons: [
      { id: '1', name: 'max', age: '20' },
      { id: '2', name: 'vijay', age: '20' }
    ]
  });
  console.log("State", personState)

  const [showPerson, setShowPerson] = useState(false)

  const [otherState, setOtherState] = useState('other state');


  const switchNamehandler = () => {
    setPersonState({
      persons: [
        { id: 1, name: 'MAx', age: '20' },
        { id: 2, name: 'vijay', age: '20' }
      ]

    })
  }

  const nameChangeHandle = (event, id) => {
    const personIndex = personState.persons.findIndex(pindex => {
      return pindex.id === id
    })
    const person = { ...personState.persons[personIndex] }
    person.name = event.target.value;

    const persons = [...personState.persons]
    persons[personIndex] = person
    setPersonState({ persons: persons })
  }

  const showNamehandler = () => {
    const doesShow = showPerson
    setShowPerson(
      !doesShow
    )

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

  let person = null


  const deleteHandler = (index) => {
    let personArr = [...personState.persons];

    // console.log(index);
    personArr.splice(index, 1)

    console.log(personArr)
    setPersonState({ persons: personArr })

    // console.log(personState.persons)

    // console.log('delete')
  }

  if (showPerson === true) {
    person = (

      <div>{
        personState.persons.map((pdata, index) => {
          return <Person
            key={pdata.id}
            name={pdata.name}
            age={pdata.age}
            change={(event) => { nameChangeHandle(event, pdata.id) }}

            click={() => deleteHandler(index)} />
        })


      }</div>


      // <div>
      // <Person
      // name={personState.persons[0].name}
      // age={personState.persons[0].age}
      // click={switchNamehandler}
      // change={nameChangeHandle} />
      // </div>
    )
  }


  return (

    <div className="App">
      I am in APP
      <button
        style={styleObj}
        onClick={switchNamehandler}
      >Switch Name</button>


      <button
        style={styleObj}
        onClick={showNamehandler}
      >Toggle Name</button>



      {/* change Person :
     {
        showPerson === true && personState?.persons.length ? (
          <Person
            name={personState.persons[0].name}
            age={personState.persons[0].age}
            click={switchNamehandler}
            change={nameChangeHandle} />
        ) : (
          null
        )
      }
 */}
      <div>
        <p>New Person data</p>
        {person}
      </div>

    </div>

    // return React.createElement('div',{className:'App'},React.createElement('h1','', 'I am here'));
  );
}


export default App;
