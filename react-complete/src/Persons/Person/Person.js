import React from "react";
import "./Person.css";
import Radium from "radium";

const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "500px"
    }
  };

  return (
    <div className="Person" style={style}>
      <h1 className="test" onClick={props.click}>
        My name is {props.name} and I am {props.age} years old
      </h1>
      <h1>{props.children}</h1>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
