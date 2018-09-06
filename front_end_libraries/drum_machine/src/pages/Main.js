import React from 'react';
import DrumButton from '../components/DrumButton';
import AddDrum from '../components/AddDrum';

const Main = () => (
	<div className='drum-box'>
		<AddDrum />
		<div className='button-grid'>
			Drum buttons
		</div>
	</div>
);

export default Main;