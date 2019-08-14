import React from 'react';
import './Person.css';

const person = (props) => {
    return (
    <div className="Person mt-3">
        <input type="text" onChange={props.changed} value={props.name} />
        <p onClick={props.click} >Im {props.name} and I am {props.age} years old!!</p>
        <h4>{props.children}</h4>        
    </div>)
}

export default person;