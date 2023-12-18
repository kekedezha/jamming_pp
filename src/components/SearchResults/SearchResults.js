import React from 'react';
import "./SearchResults.css";

import TrackList from "../Tracklist/Tracklist";

export default function SearchResults(props) {

    return (
        <div className='SearchResults'>
            <h1>Search Results</h1>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd}/>
        </div>
    );
};