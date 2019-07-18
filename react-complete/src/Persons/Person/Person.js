import React, { Component } from "react";
import classes from "./Person.css";
import Radium from "radium";
import Aux from "../../Aux/Aux";
import hoc from "../../Aux/hoc";
import WithClass from "../../Aux/WithClass";
import PropTypes from 'prop-types';


class Person extends Component {
  render() {
    const style = {
      "@media (min-width: 500px)": {
        width: "500px"
      }
    };
    return (
      <Aux>
        <div className="Person" style={style}>
          <h1  className="test" onClick={this.props.click}>
            My name is {this.props.name} and I am {this.props.age} years old
          </h1>
          <h1>{this.props.children}</h1>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  age: PropTypes.number,
  children: PropTypes.array,
  changed: PropTypes.func,
  name: PropTypes.string
}

export default hoc(Radium(Person), classes.Person);
