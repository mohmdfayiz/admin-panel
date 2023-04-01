import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Navigation to={"/"} text={'Home'} />
      <Navigation to={"/balanceSheet"} text={'Balance Sheet'} />
    </div>
  );
}

const Navigation = ({ to, text }) => {
  return <Link className="link" to={to}>{text}</Link>;
};

export default Navbar;
