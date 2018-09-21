import React, { Component } from 'react';
import DeleteDrum from './DeleteDrum';
import Sound from 'react-sound';

class DrumButton extends Component {
	constructor () {
		super();
		this.state = {
			drumHit: false
		}

		this.handleDrumPlay = this.handleDrumPlay.bind(this);
		this.handleDrumStop = this.handleDrumStop.bind(this);

	}

	handleDrumPlay() {
		this.setState({drumHit: true})
	}

	handleDrumStop() {
		this.setState({drumHit: false})
	}

	render () {
		console.log('drum button props: ', this.props);
		return (
			<div className="drum-button">
				{this.props.title ? this.props.title : this.props.name }
				<DeleteDrum id={this.props.id}/>
				<span onClick={this.handleDrumPlay}>play</span>
		    	{
		    		this.state.drumHit ? <Sound
				      url={this.props.path}
				      playStatus={Sound.status.PLAYING}
				      onFinishedPlaying={this.handleDrumStop}
				    /> : <Sound
				      url={this.props.path}
				      playStatus={Sound.status.STOPPED}
				    />
		    	}
			</div>
		)
	}

}

export default DrumButton;