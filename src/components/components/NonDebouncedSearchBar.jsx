import React, { useState } from 'react'
import "../component_css/NonDebouncedSearchBar.css";

const NonDebouncedSearchBar = ({hardcodedTitles}) => {
  const [matches, setMatches] = useState([]);
  
    const searchTitles = (query) => {
      const allNotes = JSON.parse(localStorage.getItem("Notes")) || [];
      const fetchedTitles = allNotes.map(note => note.title);
  
      const allTitles = [...fetchedTitles, ...hardcodedTitles];
      console.log("inside : ",allTitles)
  
      const filtered = query === "" ? [] : allTitles.filter(title =>
        title.toLowerCase().includes(query.toLowerCase())
      );
  
      setMatches(filtered);
    };

    const handleChange = (e) => {
      searchTitles(e.target.value)
    }
  return (
    <div className="container">
      <input
        onChange={handleChange}
        className="search-bar"
        placeholder="Search..."
      />

      {matches.length > 0 && (
      <div className="results">
        {matches.map((match, index) => (
          <div key={index} className="list">
            {match}
          </div>
        ))}
      </div>
    )}
    </div>
  )
}

export default NonDebouncedSearchBar
