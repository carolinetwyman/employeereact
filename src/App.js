import React, { Component } from "react";
import Header from './components/Header';
import Body from './components/Body';
import Wrapper from './components/Wrapper';
import employees from "./employees.json";
import Input from "./components/Input";

class App extends Component {
  state = {
    employees
  };


  render() {
    return (
      <Wrapper>
        <Input />
        <Header>Employees</Header>
        {this.state.employees.map(employee => (
          <Body

            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            job={employee.job}
            department={employee.department}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
