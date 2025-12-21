import React, { Component } from "react";
import "./MapStyles.css";

class ChildTwo extends Component {
  render() {
    return (
      <div className="student-container">
        <h1 className="student-title">Student Data</h1>
        {this.props.mystudent.map((std) => (
          <div className="student-card" key={std}>
            <p>studentID:-{std.sid}</p>
            <p>studentName:-{std.name}</p>
            <p>studentID:-{std.mobile}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default ChildTwo;
