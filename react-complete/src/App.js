import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [{ name: "Bob", age: 13 }, { name: "Dos", age: 14 }],
    otherState: "Value 1"
  };


  handleShowPersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePerson = (index) => {
    const persons = this.state.persons
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })  
  };
  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      padding: "8px"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePerson(index)}
                key={index}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <button style={style} onClick={this.handleShowPersons}>
          Switch name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
