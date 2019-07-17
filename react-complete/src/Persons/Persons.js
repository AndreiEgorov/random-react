import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  static getDerivedStateFromProps(props, state){
    console.log("Getting derived state ")
  }

  shouldComponentUpdate(nextProps, nextState){
      //must return true or false  to proceed or stop updating
      console.log("shouldComponentUpdate ")
      return true
  }

  //legacy components below: avoid using them
//   componentWillReceiveProps(props){
//     console.log("componentWillReceiveProps")
//   }

  //-----------------------

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate ")
    return {message:"Snapshot!!!"}
  }

  componentDidUpdate(prevProps, prevState, snapShot){
      //use when fetching new data from server
      console.log("Component did update")
      
      console.log(snapShot)
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <div key={person.id}>
          <p>My tiltle is {this.props.title}</p>
          <Person
            click={() => this.props.clicked(index)}
            changed={event => this.props.changed(event, person.id)}
            name={person.name}
            age={person.age}
          />
        </div>
      );
    });
  }
}

export default Persons;
