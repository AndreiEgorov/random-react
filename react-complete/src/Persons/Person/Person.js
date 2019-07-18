import React, { Component } from "react";
import "./Person.css";
import Radium from "radium";
import Aux from "../../Aux/Aux";

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

export default Radium(Person);
