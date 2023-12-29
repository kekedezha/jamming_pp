import React from 'react';
import './Track.css';

export default function Track(props) {

    const addTrack = (e) => {
        props.onAdd(props.track);
    }

    const removeTrack = (e) => {
        props.onRemove(props.track);
    }

    const playTrack = (e) => {
        props.onPlay(props.track.preview);
    }

    const toAddOrNotToAdd = () => {
        if (props.isRemoval) {
            return (
                <>
                    {props.track.preview && (<button onClick={playTrack} className='Track-action'>
                        &#9205;
                    </button>)}
                    {props.track.preview && (<button onClick={props.onPause} className='Track-action'>
                        &#9209;
                    </button>)}
                    <button onClick={removeTrack} className='Track-action'>
                        -
                    </button>
                </>
            );
        } else {
            return (
                <>
                    {props.track.preview && (<button onClick={playTrack} className='Track-action'>
                        &#9205;
                    </button>)}
                    {props.track.preview && (<button onClick={props.onPause} className='Track-action'>
                        &#9209;
                    </button>)}
                    <button onClick={addTrack} className='Track-action'>
                        +
                    </button>
                </>
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