import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Person from './Person/Person'

let name = 'Big PaPa';
let age = 29;

class App extends Component {
  //state property
    state = {
      persons: [
        { name: 'J Dawg', age: 28},
        { name: 'P Dawg', age: 69},
        { name: 'JLawrence', age: 29}
      ],
      otherstate: 'some other value'
    };

  render() {    
    return (
      <div className="App">
        <p className="display-1">Hello World</p>
        <input type="text"></input><br className="mt-2"></br>
        <button type="submit" onClick={this.eventHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> yeah Ghee</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> yeah Ghee</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
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
};

export default App;
