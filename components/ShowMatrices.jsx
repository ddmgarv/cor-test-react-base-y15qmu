import React, { Component } from "react";

class ShowMatrices extends Component {
  componentDidMount() {
    const matrices = fetch("../assets/resources.json")
      .then(data => data.json());
    console.log(matrices)
  }
  render() {
    return <div>Hola</div>;
  }
}

export default ShowMatrices;
