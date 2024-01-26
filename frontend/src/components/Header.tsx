import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate()

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="header-container">
      <input
        className="search-input"
        placeholder="Enter weather conditions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <button className="search-button" onClick={()=>{navigate('/reports')}}>show reports</button>
    </div>
  );
};

export default Header;
