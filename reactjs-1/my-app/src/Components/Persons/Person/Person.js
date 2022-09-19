import React from 'react';
import { useContext } from 'react';
import './Person.css'
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../Context/auth-context';

const person = (props) => {


  const authContext = useContext(AuthContext);

  console.log('context data ');
  console.log(authContext.authenticated)

  return (
    <Aux>

      {authContext.authenticated ? (
        <p>Authenticated!</p>
      ) : (
        <p>Please log in</p>
      )}

      <p className='person' id={props.id} onClick={props.click}> I am {props.name} and age {props.age}. {Math.floor(Math.random() * 20)}.</p>
      <p> {props.children}</p>
      <input id={props.id} type='text' onChange={props.change} value={props.name} ></input>

    </Aux>
  )
}

export default person;
