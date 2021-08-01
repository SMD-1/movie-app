import React from "react";

const Overview = ({ overview }) => {
  return (
    <div className="overview">
      <h3>Overview : </h3>
      <p style={{ marginTop: "10px" }}>{overview}</p>
    </div>
  );
};

export default Overview;
