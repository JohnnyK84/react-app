import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Person from './Person/Person';

class App extends Component {
  //state property
  state = {
    persons: [
      { id: 11, name: 'J Dawg', age: 28},
      { id: 12, name: 'P Dawg', age: 69},
      { id: 13, name: 'JLawrence', age: 29}
    ],
    showPersons:  false
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'J Dawg', age: 34},
        { name: event.target.value , age: 69},
        { name: 'JLawrence', age: 25}
      ]})
  }

  deletePersonHandler = (personIndex) => {
    //const persons =this.state.persons.slice(); or use es6 method to make copy of array:
    const persons = [...this.state.persons]; //equivelent of slice approach
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  hidePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    /*call setState to adjust the state...
    set showPerons to what doesShow is not e.g if doesShow is false set showPersons to true*/
    this.setState({showPersons: !doesShow}); 
  }

  render() {
    
    //the better JavaScript way of making content conditional
    let persons = null;
    //check showPersons and make persons = content to be displayed
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* use vanilla JS function map() to copy javascript state array and execute person => function on
          each element of the array to return as JS objects from state as JSX readable elements */}
          {this.state.persons.map((person, index) => {
              //jsx returned
              return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} /> //person key added to help react efeficiently update only necessary parts of 
            }
          )}
        </div>
      );
    }
    
    return (
      <div className="App">
        <h1 className="display-4">First React App</h1>
        <button className="btn btn-primary mb-3"type="submit" onClick={this.hidePersonsHandler}>Toggle Persons</button>
        
        {persons/*if showPersons is set to true persons will be rendered*/}
      </div>
    );
  };  
};

export default App;
