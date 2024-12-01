import React from "react";
import "./SearchBar.css";

export default function SearchBar({ setSearchTerm }) {
  return (
    <div className="searchBar-container">
      <div className="searchBar-header">
        <div className="searchBar-title">
          All Offers from McDonald&apos;s East London
        </div>
        <div className="searchBar-input">
          <input
            type="text"
            placeholder="Search from menu..."
            className="searchBar-input-field"
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
      </div>
    </div>
  );
}
