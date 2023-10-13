import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <p>Till products sold</p>
      <Link to="/home" className="underline">
        go to dashboard
      </Link>
    </div>
  );
};

export default Products;
