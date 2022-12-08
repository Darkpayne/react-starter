import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between items-center shadow-lg py-3 text-2xl">
      <h1>Nav Starter</h1>
      <ul className="flex gap-x-5 mx-4">
        <Link to="/user">
          <li>Home</li>
        </Link>
        <Link to="/user/about">
          <li>About</li>
        </Link>
        <Link to="/signin">
          <li>Sign In</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
