import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      {" "}
      <div className="white f3">{`${name}, Magiska Hjärnan har hittat ${entries} ansikten åt dig`}</div>
      <div className="white f1"></div>
    </div>
  );
};

export default Rank;
