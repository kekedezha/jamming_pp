import React from 'react';
import TrackList from '../Tracklist/Tracklist';
import './Playlist.css'

export default function Playlist(props) {

    return (
        <div className="Playlist">
            <TrackList 
            tracks={props.playlistTracks} 
            onRemove={props.onRemove}
            isRemoval={true}/>
        </div>
    );
};

// playlistName={playlistName}
// onNameChange={handlePlaylistNameChange}
// onSave={handlePlaylistToSpotify}
