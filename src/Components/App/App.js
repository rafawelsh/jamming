import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {name: "name1", artist: "artist1", album: "album1", id: 1},
        {name: "name2", artist: "artist2", album: "album2", id: 2},
        {name: "name3", artist: "artist3", album: "album3", id: 3}
      ],
      playlistName:  'My Playlist',
      playlistTracks:  [
        {name: "playlistName1", artist: "playlistArtist1", album: "playlistAlbum1", id: 4},
        {name: "playlistName2", artist: "playlistArtist2", album: "playlistAlbum2", id: 5},
        {name: "playlistName3", artist: "playlistArtist3", album: "playlistAlbum3", id: 6}
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    //checking if the track is already in the array held within the state's playlistTracks
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    //if not, it add the new track to the state
    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    // look through playlistTracks array and currentTrack is true (currentTrack no equal to track.id(track.id is not filtered)) else if false (currentTrack is equal to track.id((then track.id is filtered))
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
                            onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
