import React, { Component } from "react";
import "./Table.css";

class ChildTwo extends Component {
  render() {
    return (
      <div className="student-container">
        <h1 className="student-title">Student Data</h1>

        <table className="student-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Mobile</th>
            </tr>
          </thead>

          <tbody>
            {this.props.mystudent.map((std) => (
              <tr key={std.sid}>
                <td>{std.sid}</td>
                <td>{std.name}</td>
                <td>{std.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ChildTwo;
