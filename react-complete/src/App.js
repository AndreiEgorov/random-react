import React, { Component } from "react";
import Persons from "./Persons/Persons";
import classes from "./App.css";
import Radium, { StyleRoot } from "radium";
import hoc from "./Aux/hoc";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor created");
  }
  state = {
    persons: [
      { id: 123, name: "Bob", age: 13 },
      { id: 2342, name: "Dos", age: 14 },
      { id: 23422, name: "Robert", age: 15 }
    ],
    otherState: "Value 1",
    charCounter: 0
  };

  static getDerivedStateFromProps = (props, state) => {
    console.log("GET DERIVED STATE FROM PROPS STATE");
    return {
      propsa: props
    };
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("SHOULD COMPONENT UPDATE");
    return true;
  }

  componentDidUpdate() {
    console.log("COMPONENT DID UPDATE");
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        charCounter: prevState.charCounter + 1
      };
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
  componentDidMount() {
    console.log("Mounted");
  }
  render() {
    console.log("Rendering");
    const style = {
      backgroundColor: "green",
      border: "1px solid blue",
      padding: "8px",
      color: "white",
      fontSize: "20px"
      // ":hover": {
      //   backgroundColor: "lightGreen",
      //   color: "orange"
      // }
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
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
      persons = (
        <div>
          <Persons
            title={this.props.title}
            persons={this.state.persons}
            clicked={this.deletePerson}
            changed={this.nameChangeHandler}
          />
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

export default hoc(Radium(App), classes.App);
