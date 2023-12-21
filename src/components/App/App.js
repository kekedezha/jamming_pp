import React, { useState, useEffect } from 'react';

import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [curatedPlaylist, setCuratedPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("Set Name Of Your New Playlist");

  // Handle onClick event when Search button is pressed
  const search = (itemToSearch) => {
    Spotify.search(itemToSearch).then(response => setSearchResults(response));
    console.log(searchResults);

  }

  // Handle onClick event when addition button is clicked
  // This should add the track from the results over to
  // the curated playlist
  const handleAdd = (trackToAdd) => {

  }

  // Handle onClick event when remove button is clicked
  // This should remove the track from the playlist
  const handleRemove = (trackToRemove) => {

  }

  // Handle onClick event when "add playlist" button is
  // clicked. This should call the Spotify function 
  const handlePlaylistToSpotify = () => {

  }
 


  return (
      <div className="App">
        <SearchBar onSearch={search} />
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
         <h4>
          with React & Spotify
        </h4>
        <SearchResults searchResults={searchResults} onAdd={handleAdd}/>
        <Playlist />
        {/* <div className="Footer">
          <p>
            Photo by <a href="https://unsplash.com/@namroud?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Namroud Gorguis</a> on <a href="https://unsplash.com/photos/photo-of-black-and-brown-cassette-tape-FZWivbri0Xk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p>
        </div> */}
      </div>
  );
}

export default App;
