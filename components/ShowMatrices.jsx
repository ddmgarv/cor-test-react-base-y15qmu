import React, { Component } from "react";

class ShowMatrices extends Component {
  componentDidMount() {
    const matrices = fetch("../assets/resources.json").then(data =>
      data.json()
    );
  }
  render() {
    return <div>{console.log(matrices)}</div>;
  }
}

export default ShowMatrices;
