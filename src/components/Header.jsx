import React from "react";
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <header>
      <h1>Travel Advisor</h1>
      <h2>Travel your way</h2>
      <div className="search">
        <input type="text" placeholder="Search places..." />
        <FiSearch />
      </div>
    </header>
  );
}

export default Header;
