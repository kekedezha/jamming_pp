// Spotify.js - Authorization through Implicit Grant Flow

// The implicit grant flow is carried out on the client side and it does not involve secret keys. Thus,
// you do not need any server-side code to use it. Access tokens issued are short-lived with no refresh
// token to extend them when they expire.

// The implicit grant flow has some significant security flaws but will be used since the flow will be
// carried out on the client side and does not involve secret keys.
const clientID = 'f3c0956fcca444c2bf20094271f91426';
const redirectUri = 'http://localhost:3000/';
let accessToken; 

// Spotify Object to be exported to parent components. 
const Spotify = {

    getAccessToken() {
        // Check to see if accessToken is still available, if it is then return the accessToken for
        // API calls
        if(accessToken) {
            return accessToken;
        }

        // Capture access token value in the URL and store in array, if not present return null.
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        // Capture access token value in the URL and store in array, if not present return null.
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        // If URL did have both a access_token and expires_in then do the following.
        if (accessTokenMatch && expiresInMatch) {
            // Store accessTokenMatch retrieved from URL and assign it to accessToken
            accessToken = accessTokenMatch[1];
            // Store expiresInMatch retrieved from URL and assign it to accessToken
            const expiresIn = Number(expiresInMatch[1]);
            // Clear access token after time retrieved from URL
            window.setTimeout(() => accessToken='', expiresIn * 1000);
            window.history.pushState("Access Token", null,"/")
            // return accessToken;
            return accessToken;
        } else {    //Else request access token again. 
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    async search (searchValue) {
        // Get access token from getAccessToken function to be able to search spotify.
        // To be able to search Spotify, user must have an Spotify account and auth-
        // orize linking their account.
        const accessToken = Spotify.getAccessToken();
        // Send GET request to SEARCH endpoint with searchValue parameter
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchValue}`, {
        headers: {
            // include access Token
            Authorization: `Bearer ${accessToken}`
        }
        }).then(response => {
            // from the HTTP GET Request, return the response converted to json
            console.log(response);
            return response.json(); 
        }).then(jsonResponse => {
            // If jsonResponse object does not have a 'tracks' key then return empty
            // array
            if(!jsonResponse.tracks) {
                return [];
            }
            // Return a mapped version of the jsonResponse object 
            return jsonResponse.tracks.items.map(track => ({
                name: track.name,
                album: track.album.name,
                artist: track.artists[0].name,
                id: track.id,
                uri: track.uri,
                explicit: track.explicit,
                preview: track.preview_url
            }))
        });
    },

    async saveToSpotify(playlistNameToSave, playlistTracksToSave) {
        // Get access token from getAccessToken function to be able to save to spotify.
        // To be able to save to Spotify, user must have an Spotify account and auth-
        // orize linking their account.
        const accessToken = Spotify.getAccessToken();

        try {
        // Using the accessToken get user ID...Don't know if this step is necessary 
        const userIDResponse = await fetch('https://api.spotify.com/v1/me', {
            headers: {
            Authorization: 'Bearer ' + accessToken
            }
        });
        const data = await userIDResponse.json();
        const userID = data.id;

        // Once user ID is obtained, create the Playlist!
        const playlistCreationResponse = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                name: playlistNameToSave,
                description: 'Playlist curated using Jamming Web App created by Christian Dezha.',
                public: true,
            }),
        })

        const playlistData = await playlistCreationResponse.json();
        const playlistID = playlistData.id;

        const trackAdditionResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }, 
            body: JSON.stringify({
                uris: playlistTracksToSave
            }),
        })
        if (trackAdditionResponse.ok){
            alert(`Go to your Spotify account and start listening! You successfully created ${playlistNameToSave}!!`)

        }

    } catch(error) {
        alert('Sorry, playlist was not able to be create. Error: ' + error);
    }
        // If successful!
    }
};
export default Spotify;