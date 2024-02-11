import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2 style={{ color: "red" }}>Error 404 - Page not Found</h2>
      <Link to="/">Please click here to navigate back to Home Page</Link>
    </div>
  );
};

export default Error;
