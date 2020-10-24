import React from "react";
import { Link } from "react-router-dom";
import "./NavigationItems.css";

function NavigationItems() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/find-words">Find Words</Link>
          </li>
          <li>
            <Link to="/my-words">My Words</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationItems;
