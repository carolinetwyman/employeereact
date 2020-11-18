import React from "react";


function SearchResults(props) {
  return(
  props.employee.map(result => (
    <tr key={result.login.uuid}>
      <td>{<img alt={result.login.uuid} className="img" src={result.picture.medium}/>} </td>
      <td>{result.name.first} </td>
      <td>{result.name.last} </td>
      <td>{result.cell} </td>
      <td>{result.email} </td>
      <td> {result.location.city}</td>
    </tr>))
  ) 
 
}

export default SearchResults;