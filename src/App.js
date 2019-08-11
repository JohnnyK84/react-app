import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Person from './Person/Person'

let name = 'Big PaPa';
let age = 29;

const app = props => {
  //state property
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'J Dawg', age: 28},
      { name: 'P Dawg', age: 69},
      { name: 'JLawrence', age: 29}
    ],
    otherstate: 'some other value'
  });

  const eventHandler = () => {
  //alert('Clicked');
  // DONT CHANGE STATE LIKE THIS: this.state.persons[0].name = 'JK';
  setPersonsState({
      persons: [
        {name: 'JK', age: 34},
        { name: 'P Dawg', age: 69},
        { name: 'JLawrence', age: 25}
      ]
    });
  };

  return (
    <div className="App">
      <p className="display-1">Hello World</p>
      <input type="text"></input><br className="mt-2"></br>
      <button type="submit" onClick={eventHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> child 1 of Person</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> child 2 of Person</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
    </div>
  );
};


export default app;
/*
state = {
  persons: [
    { name: 'J Dawg', age: 28},
    { name: 'P Dawg', age: 69},
    { name: 'JLawrence', age: 29}
  ],
  otherstate: 'some other value'
};
eventHandler = () => {
  //alert('Clicked');
  // DONT CHANGE STATE LIKE THIS: this.state.persons[0].name = 'JK';
  this.setState({
    persons: [
      {name: 'JK', age: 34},
      { name: 'P Dawg', age: 69},
      { name: 'JLawrence', age: 25}
    ]
  });
};
*/