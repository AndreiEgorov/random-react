import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Bob", age: 13 }, { name: "Dos", age: 14 }],
    otherState: "Value 1"
  };

  nameSwitchHandler = (newName) => {
    this.setState({
      persons: [{ name: newName, age: 453 }, { name: "ROB", age: 123 }],
      otherState: "Value 5"
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello People</h1>
        <button onClick={() => this.nameSwitchHandler("ALEX")}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.nameSwitchHandler.bind(this, "Mary")}
        >
          I like Running
        </Person>
      </div>
    );
  }
}

export default App;
