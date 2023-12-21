import React from 'react';
import Track from '../Track/Track'
import './Tracklist.css';

export default function Tracklist(props) {

    return (
        <div className="TrackList">
            {props.tracks.map((track) => {
                return (
                    <Track 
                    isRemoval={props.isRemoval}
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                    track={track}
                    key={track.id}
                    />
                );
            })}
        </div>
    );
};