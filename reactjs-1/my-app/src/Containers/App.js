
import React from 'react';
//import ReactDOM from 'react-dom/client';


import styles from "./styles.module.css";

import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

import { useState } from 'react';

//import withClass from '../hoc/WithClass';

import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../Context/auth-context';


const App = () => {


  const [hideState, setHideState] = useState(false);

  const [personState, setPersonState] = useState({
    persons: [
      { id: '1', name: 'max', age: '20' },
      { id: '2', name: 'vijay', age: '20' }
    ],
    authenticated: false
  });
  console.log("State", personState)

  const [showPerson, setShowPerson] = useState(false)

  //  const [otherState, setOtherState] = useState('other state');


  /*
  const switchNamehandler = () => {
    setPersonState({
      persons: [
        { id: 1, name: 'MAx', age: '20' },
        { id: 2, name: 'vijay', age: '20' }
      ]

    })
  }
*/
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



  let person = null


  const deleteHandler = (index) => {
    let personArr = [...personState.persons];

    // console.log(index);
    personArr.splice(index, 1)

    console.log(personArr)
    setPersonState({ persons: personArr })

    // console.log(personState.persons)

    // console.log('delete')

    console.log('hide state', hideState)
  }

  const loginHandler = () => {
    setPersonState({ ...personState, authenticated: !personState.authenticated });
    console.log('loginHandler clickec')
  };


  return (

    //<withClass className={styles.App}>

    <Aux>
      <button onClick={() => { setHideState(!hideState) }} > Hide Me </button>

      <AuthContext.Provider
          value={{
            authenticated: personState.authenticated,
            login: loginHandler
          }}
        >


      {hideState === true ? <Cockpit
        showNamehandler={showNamehandler}
        persons={personState.persons}
      /> : null}


      <div>
        <p>New Person data</p>
        <Persons
          persons={personState.persons}
          personsLength={personState.persons.length}
          delete={deleteHandler}
          clicked={nameChangeHandle}
          showPerson={showPerson}
          isAuthenticated={personState.persons.authenticated}
        />
      </div>

      </AuthContext.Provider>
    </Aux>
    //</withClass>

    // return React.createElement('div',{className:'App'},React.createElement('h1','', 'I am here'));
  );
}


export default withClass(App, styles); 


