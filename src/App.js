import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Person from './Person/Person';

class App extends Component {
  //state property
  state = {
    persons: [
      { name: 'J Dawg', age: 28},
      { name: 'P Dawg', age: 69},
      { name: 'JLawrence', age: 29}
    ],
    showPersons:  false
  };

  switchNameHandler = (newName) => {
    //alert('Clicked');
    // DONT CHANGE STATE LIKE THIS: this.state.persons[0].name = 'JK';
    this.setState({
      persons: [
        {name: newName, age: 34},
        { name: 'P Dawg', age: 69},
        { name: 'JLawrence', age: 25}
      ]
    });
  };

  nameChangedHandler =(event) => {
    this.setState({
      persons: [
        { name: 'J Dawg', age: 34},
        { name: event.target.value , age: 69},
        { name: 'JLawrence', age: 25}
      ]
    });    
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
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}> child element of Person 1
          </Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Johnny!')} 
            changed={this.nameChangedHandler}
            > child element of Person 2          
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}>
          </Person>
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
