import React from "react";

const Matrix = ({ matrix }) => {
  const countOIE = () => {
    console.log(matrix);
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == "O") {
          try {
            if (matrix[y][x + 1] == "I" && matrix[y][x + 2] == "E") {
              console.log("found something");
            }
          } catch (error) {}
          try {
            if (matrix[y + 1][x + 1] == "I" && matrix[y + 2][x + 2] == "E") {
              console.log("found something");
            }
          } catch (error) {}
          try {
            if (matrix[y + 1][x] == "I" && matrix[y + 2][x] == "E") {
              console.log("found something");
            }
          } catch (error) {}
          try {
            if (matrix[y + 1][x - 1] == "I" && matrix[y + 2][x - 2] == "E") {
              console.log("found something");
            }
          } catch (error) {}
          try {
            if (matrix[y][x - 1] == "I" && matrix[y][x - 2] == "E") {
              console.log("found something");
            }
          } catch (error) {}
          try {
            if (matrix[y - 1][x - 1] == "I" && matrix[y - 2][x - 2] == "E") {
              console.log("found something");
            }
          } catch (error) {}
          try {
            if (matrix[y - 1][x] == "I" && matrix[y - 2][x] == "E") {
              console.log("found something");
            }
          } catch (error) {}
          try {
            if (matrix[y - 1][x + 1] == "I" && matrix[y - 2][x + 2] == "E") {
              console.log("found something");
            }
          } catch (error) {}
        }
      }
    }
  };
  return (
    <div className="matrix">
      {matrix.map(item => (
        <div className="row-container">
          {item.map(letter => (
            <span className="letter">{letter}</span>
          ))}
        </div>
      ))}
      <br />
      <button onClick={countOIE}>contar</button>
    </div>
  );
};

export default Matrix;
