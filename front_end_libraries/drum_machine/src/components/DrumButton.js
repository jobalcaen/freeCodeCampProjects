import React from 'react';
import DeleteDrum from './DeleteDrum';

const DrumButton = (props) => (
	<div className="drum-button">
		{props.title}
		<DeleteDrum id={props.id}/>
		<audio
        	id="t-rex-roar"
        	controls
        	src="http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3">
        	Your browser does not support the <code>audio</code> element.
    	</audio>
	</div>
)

export default DrumButton;