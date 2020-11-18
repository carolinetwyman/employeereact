import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import API from "./utils/API";
import Wrapper from "./Wrapper";
import { Button } from 'reactstrap';
class EmployeeSection extends React.Component {
  state = {
    search: "",
    employee: [],
    employeeName: [],
  };

  componentDidMount() {
    this.searchGiphy();
    
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ employee: res.data.results, employeeName: res.data.results}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    const results = this.state.employee.filter(person => {
      var objectfirst = person.name.first.toLowerCase();
      var objectlast = person.name.last.toLowerCase();
      var concat = objectfirst.concat(objectlast)
      return (concat.indexOf(value.toLowerCase()) !== -1)})
    this.setState({employeeName: results})
    
  };

  firstName = event => {event.preventDefault();
    var empName = this.state.employeeName.slice(0);
    empName.sort(function(a,b) {
    var aa = a.name.first.toLowerCase();
    var bb = b.name.first.toLowerCase();
    return (aa < bb ? -1 : aa > bb ? 1 : 0);
    });
  this.setState({employeeName: empName})
    };

  lastName = event => {event.preventDefault();
    var empName = this.state.employeeName.slice(0);
    empName.sort(function(a,b) {
    var aa = a.name.last.toLowerCase();
    var bb = b.name.last.toLowerCase();
    return (aa < bb ? -1 : aa > bb ? 1 : 0);
    });
  this.setState({employeeName: empName})
    };


  render() {
    return (
        <Wrapper>
        <SearchBar
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <div>
         <thead>
          <tr>
            <th></th>
            <th>First Name <Button onClick={this.firstName}>Sort</Button></th>
            <th>Last Name <Button onClick={this.lastName}>Sort</Button></th>
            <th>Phone Number</th>
            <th>E-mail</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody> 
        <SearchResults employee={this.state.employeeName} />
        </tbody>
        </div>
        </Wrapper>
    )
  }
}
export default EmployeeSection;