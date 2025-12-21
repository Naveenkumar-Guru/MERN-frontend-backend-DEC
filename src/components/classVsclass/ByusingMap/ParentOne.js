import React, { Component } from "react";

import ChildTwo from "./ChildTwo";

class ParentOne extends Component {
  student = [
    { sid: 1, name: "Naveen", mobile: "9876543210" },
    { sid: 2, name: "Ravi", mobile: "9123456780" },
    { sid: 3, name: "Kiran", mobile: "9988776655" },
    { sid: 4, name: "Suresh", mobile: "9090909090" },
    { sid: 5, name: "Anil", mobile: "9012345678" },
  ];
  render() {
    return <ChildTwo mystudent={this.student} />;
  }
}

export default ParentOne;
