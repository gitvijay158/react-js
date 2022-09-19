import React from 'react';
import './Person/Person'
import Person from './Person/Person';

const persons = (props) => {

  let personsData = null

  

  if (props.showPerson === true) {

     personsData = props.persons.map((pdata, index) => {
      return <Person
        key={pdata.id}
        name={pdata.name}
        age={pdata.age}
        change={(event) => { props.clicked(event, pdata.id) }}
        click={() => props.delete(index)}
      />
    })

  } 

  return (
    <div>
    { personsData }
    </div>
  )
}

export default persons;
