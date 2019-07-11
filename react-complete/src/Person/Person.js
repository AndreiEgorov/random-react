import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person" onClick={props.click}>
      <h1 className="test">
        My name is {props.name} and I am {props.age} years old
      </h1>
      <h1>{props.children}</h1>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
