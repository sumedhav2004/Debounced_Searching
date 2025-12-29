import { useState } from "react";
import "../component_css/SearchBar.css";
import { useDebounce } from "../../hooks/useDebounce";

const SearchBar = ({ hardcodedTitles }) => {
  const [matches, setMatches] = useState([]);

  const searchTitles = (query) => {
    const allNotes = JSON.parse(localStorage.getItem("Notes")) || [];
    const fetchedTitles = allNotes.map(note => note.title);

    const allTitles = [...fetchedTitles, ...hardcodedTitles];

    const filtered = query === "" ? [] : allTitles.filter(title =>
      title.toLowerCase().includes(query.toLowerCase())
    );

    setMatches(filtered);
  };

  const debouncedSearch = useDebounce(searchTitles, 1000);

  const handleChange = (e) => {
      debouncedSearch(e.target.value);
  };

  return (
    <div className="container">
      <input
        onChange={handleChange}
        className="search-bar"
        placeholder="Debounced Search... (search with eng, england, english etc.)"
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
  );
};

export default SearchBar;
