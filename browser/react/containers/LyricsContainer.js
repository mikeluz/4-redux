import React from 'react';
import Lyrics from '../components/Lyrics';
import store from '../store';

class LyricsContainer extends React.Component {

	constructor () {
		this.state = store.getState();
	}

	ComponentDidMount () {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState());
		});
	}

	ComponentWillMount () {
		this.unsubscribe();
	}

	render () {
		return (

			<Lyrics
				
			/>

		);
	}

}