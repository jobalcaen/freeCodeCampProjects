import React, { Component } from 'react';
import DeleteDrum from './DeleteDrum';
import Sound from 'react-sound';


class DrumButton extends Component {
	constructor () {
		super();
		this.state = {
			soundStatus: STOPPED
		}
	}

	render () {
		return (
			<div className="drum-button">
				{props.title}
				<DeleteDrum id={props.id}/>
		    	<Sound
			      url="/src/drum_audio/acoustic_hat_02.wav"
			      playStatus={Sound.status.PLAYING}
			      onFinishedPlaying={console.log("sound finised")}
			    />
			</div>
		)
	}

}

export default DrumButton;