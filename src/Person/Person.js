import React from 'react';

const person = (props) => {
    return (
    <div>
        <p>Im {props.name} and I am {props.age} years old!!</p>
        <h1>{props.children}</h1>
    </div>)
}

export default person;