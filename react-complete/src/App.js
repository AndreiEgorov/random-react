import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";
import Radium, {StyleRoot} from "radium";

class App extends Component {
  state = {
    persons: [
      { id: 123, name: "Bob", age: 13 },
      { id: 2342, name: "Dos", age: 14 },
      { id: 23422, name: "Robert", age: 15 }
    ],
    otherState: "Value 1"
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  handleShowPersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePerson = index => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };
  render() {
    const style = {
      backgroundColor: "green",
      border: "1px solid blue",
      padding: "8px",
      color: "white",
      fontSize: "20px",
      ":hover": {
        backgroundColor: "lightGreen",
        color: "orange"
      }
    };
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePerson(index)}
                key={index}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(" ")}>Test TEXT </p>
          <button style={style} onClick={this.handleShowPersons}>
            Switch name
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
