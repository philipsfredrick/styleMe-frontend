import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/home/products" className="underline">
        go to products
      </Link>
    </div>
  );
};

export default Dashboard;
