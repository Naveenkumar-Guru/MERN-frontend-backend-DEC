import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h2>Student ID: {this.props.sID}</h2>
        <h2>Student Name: {this.props.sName}</h2>
        <h2>Mobile No: {this.props.mobileNo}</h2>
      </div>
    );
  }
}

export default Child;
