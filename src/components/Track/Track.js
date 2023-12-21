import React from 'react';
import './Track.css';

export default function Track(props) {

    const addTrack = (e) => {
        props.onAdd(props.track);
    }

    const removeTrack = (e) => {
        props.onRemove(props.track);
    }

    const toAddOrNotToAdd = () => {
        if (props.isRemoval) {
            return (
                <button onClick={removeTrack} className='Track-action'>
                    -
                </button>
            );
        } else {
            return (
                <button onClick={addTrack} className='Track-action'>
                    +
                </button>
            );
        }
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                {props.track.artist} | {props.track.album}
                </p>
                {props.track.explicit && (<p>Explicit</p>)}
            </div>
            {toAddOrNotToAdd()}
        </div>
    );
};