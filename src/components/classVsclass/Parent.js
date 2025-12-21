import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  student = {
    stdID: 1001,
    stdName: "kumar",
    mobileNo: "9876543210",
  };

  render() {
    return (
      <div>
        <Child
          sID={this.student.stdID}
          sName={this.student.stdName}
          mobileNo={this.student.mobileNo}
        />
      </div>
    );
  }
}

export default Parent;
