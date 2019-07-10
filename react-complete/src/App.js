import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [{ name: "Bob", age: 13 }, { name: "Dos", age: 14 }],
    otherState: "Value 1"
  });

  const [{personState:otherState}, setOtherState] = useState("Value2")
  console.log("personState", personState);

  const nameSwitchHandler = () => {
    setPersonState({
      persons: [{ name: "Bodrei", age: 34 }, { name: "losas", age: 124 }],
      otherState: personState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hello People</h1>
      <button onClick={nameSwitchHandler}>Switch name</button>
      <Person
        name={otherState || "RONIN"}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        I like Running
      </Person>
    </div>
  );
};

export default App;
