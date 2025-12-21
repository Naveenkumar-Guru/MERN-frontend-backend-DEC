import React, { Component } from "react";
import TableChild from "./TableChild";

class TableParent extends Component {
  student = [
    { sid: 1, name: "Manoj", mobile: "9876543210" },
    { sid: 2, name: "Bhavani", mobile: "9123456780" },
    { sid: 3, name: "jaya", mobile: "9988776655" },
    { sid: 4, name: "saravana", mobile: "9090909090" },
    { sid: 5, name: "Vinay", mobile: "9012345678" },
  ];
  render() {
    return <TableChild mystudent={this.student} />;
  }
}

export default TableParent;
