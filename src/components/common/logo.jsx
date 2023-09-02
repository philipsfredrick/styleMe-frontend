import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="h-24 w-24 cursor-pointer"
          src="src\assets\styleme-logo.png"
          alt="Site Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
