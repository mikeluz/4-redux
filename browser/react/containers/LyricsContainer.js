import React from 'react';
import Lyrics from '../components/Lyrics';
import store from '../store';
import setLyrics from '../action-creators/lyrics'
import axios from 'axios'

class LyricsContainer extends React.Component {

	constructor () {
		super();
		this.state = Object.assign({
			artistQuery: '',
			songQuery: ''
		}, store.getState());

		this.handleArtistInput = this.handleArtistInput.bind(this);
	    this.handleSongInput = this.handleSongInput.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);

	}

	ComponentDidMount () {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
	}

	ComponentWillMount () {
		this.unsubscribe();
	}

	handleArtistInput(artist) {
		this.setState({artistQuery: artist});
	}

	handleSongInput(song) {
		this.setState({ songQuery: song});
	}

	handleSubmit() {
		event.preventDefault();
 		   if (this.state.artistQuery && this.state.songQuery) {

	      axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
	        .then(response => {
	          const setLyricsAction = setLyrics(response.data.lyric);
	          store.dispatch(setLyricsAction);           
	      });

    }


	}




	render () {
		return (
			<Lyrics
		      text={this.state.text}
		      setArtist={this.handleArtistInput}
		      setSong={this.handleSongInput}
		      artistQuery={this.state.artistQuery}
		      songQuery={this.state.songQuery}
		      handleSubmit={this.handleSubmit}
			/>

		);
	}

}