import React from "react";

const Matrix = ({ matrix }) => (
  <div className="matrix">
    {matrix.map(item => (
      <div className="row-container">
        <div className="letter">{item}</div>
      </div>
    ))}
  </div>
);

export default Matrix;
