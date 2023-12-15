import React, { useState, useEffect } from 'react';

import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


function App() {


  return (
      <div className="App">
        <SearchBar />
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <h4>
          With React & Spotify
        </h4>
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
  );
}

export default App;
