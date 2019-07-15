import React from "react";
import Person from "./Person/Person";
const Persons = props => {
  return props.persons.map((person, index) => {
    return (
        <div>
        <p>My tiltle is {props.title}</p>
      <Person
        key={person.id}
        click={() => props.clicked(index)}
        changed={event => props.changed(event, person.id)}
        name={person.name}
        age={person.age}
      />
      </div>
    );
  });
};

export default Persons;
