import React from 'react';
import './Person.css'

const person = (props) => {
  return (
  <div>
  <p className='person' id={props.id} onClick={props.click}> I am {props.name} and age {props.age}. {Math.floor(Math.random()*20)}.</p>
  <p> {props.children}</p>
  <input id={props.id}  type='text' onChange={props.change} value={props.name} ></input>
  </div>
  )
}

export default person;
