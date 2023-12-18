import React, { useState } from 'react';
import "./SearchBar.css";

export default function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("");

    
    const handleInput = e => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        props.onSearch(searchValue);
    }

    return (
        <div className="SearchBar">
            <input type="text" placeholder="Enter A Song Title" onChange={handleInput}/>
            <button className="SearchButton" onClick={handleSearch}>SEARCH</button>
        </div>
    );
};