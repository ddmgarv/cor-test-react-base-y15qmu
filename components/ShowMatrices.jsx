import React, { Component } from "react";
import { getResources } from "../services/getResources";
import Matrix from "./Matrix";
class ShowMatrices extends Component {
  state = {
    matrices: []
  };

  async componentDidMount() {
    const data = await getResources();
    console.log(data);
    this.setState({
      matrices: data
    });
  }

  render() {
    return (
      <div className="matrices-container">
        {this.state.matrices.map((matrix, index) => (
          <Matrix key={index} matrix={matrix} />
        ))}
      </div>
    );
  }
}

export default ShowMatrices;
