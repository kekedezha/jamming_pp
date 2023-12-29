import React from 'react';
import TrackList from '../Tracklist/Tracklist';
import './Playlist.css'

export default function Playlist(props) {

    const handleInput = e => {
        props.onNameChange(e.target.value);
    }

    const handleSaveButton = () => {
        props.onSave(props.playlistName);
    }

    return (
        <div className="Playlist">
            <input 
                type="text"
                placeholder="Enter a Playlist Title"
                onChange={handleInput}
            />
            <TrackList 
                tracks={props.playlistTracks} 
                onRemove={props.onRemove}
                isRemoval={true}
                onPlay={props.onPlay}
                onPause={props.onPause}
            />
            <button 
                className='Playlist-save'
                onClick={handleSaveButton}   
            >
                Save To Spotify!
            </button>
        </div>
    );
};

