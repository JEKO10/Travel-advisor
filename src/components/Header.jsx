import React from "react";
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <header>
      <h1>Travel Advisor</h1>
      <h2>Travel your way</h2>
      <div className="search">
        <FiSearch />
        <input type="text" placeholder="Search places..." />
      </div>
    </header>
  );
}

export default Header;
