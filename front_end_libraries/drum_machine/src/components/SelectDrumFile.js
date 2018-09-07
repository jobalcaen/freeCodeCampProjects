import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {drumSounds: state.drum_files}
}

const ConnectedSelectDrumFile = (drumSounds) => {
	const drumSoundsList = drumSounds.drumSounds.map(drum => <option>{drum.name}</option>);

	return (
		<select name="drum_files">
			{drumSoundsList}
		</select>
	)
}



const SelectDrumFile = connect(mapStateToProps, null)(ConnectedSelectDrumFile);
export default SelectDrumFile;