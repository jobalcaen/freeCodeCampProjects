import React from 'react';
import { connect } from 'react-redux';
import AddDrum from './AddDrum';
import DrumButton from './DrumButton';

const mapStateToProps = state => {
  return { drums: state.drums };
};


const ConnectedDrumButtons = (drums) => {
	console.log('drum buttons: ', drums.drums);

	const drumslist = drums.drums.map(drum => {
		console.log('drum props', drum);
		return <DrumButton 
			title={drum.title}
			id={drum.id}
			key={drum.id}
			path={drum.path}
			name={drum.name}
		/>

	})


	return (
		<div className='button-grid'>
			{drumslist}
			<AddDrum />

		</div>
	)
}

const DrumButtons = connect(mapStateToProps)(ConnectedDrumButtons);

export default DrumButtons;