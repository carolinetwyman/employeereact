import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange} 
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Start typing an employee's name"
          id="employeeName"
        />
      </div>
    </form>
  );
}

export default SearchBar;