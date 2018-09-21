import React from 'react';
import DrumButton from '../components/DrumButton';
import AddDrum from '../components/AddDrum';
import DrumButtons from '../components/DrumButtons';
import { hot } from 'react-hot-loader';



const Main = () => (
	<div className='drum-box'>
		<DrumButtons />
	</div>
);


export default hot(module)(Main)

