import React from "react";
import "./style.css";

function Body(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Job:</strong> {props.job}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Body;