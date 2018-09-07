import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addDrum } from '../actions/action-creators';
import uuidv1 from 'uuid/v1';


const mapDispatchToProps = dispatch => {
  return {
    addDrum: drum => dispatch(addDrum(drum))
  }
};

const mapStateToProps = (state) => {
	return {drumSounds: state.drum_files}
}


class ConnectedAddDrum extends Component {
	constructor() {
		super();
		this.state = {
			title:"",
			clicked: false,
			sound: null
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFileSelect = this.handleFileSelect.bind(this);

	}

	handleChange(event) {
		this.setState({title: event.target.value});
	}

	handleFileSelect(event) {
		this.setState({sound: event.target.value});
	}

	handleSubmit(event) {
	    event.preventDefault();
		const { title, id, sound } = this.state;
		this.props.addDrum({
			title: title,
			id: uuidv1(),
			sound: sound
		});
		this.setState({title:""});
	}

	render() {
		const drumSoundsList = this.props.drumSounds.map(drum => 
			<option
				key={uuidv1()}
				value={drum.id}
			>
				{drum.name}
			</option>
		);

		return(
			<div className="drum-button">
				<form onSubmit={this.handleSubmit}>
        			<label>
          				Drum Name:
          			<input 
          				type="text"
          				value={this.state.title}
          				onChange={this.handleChange}
          				className='add-drum-tite-text'
          			/>
        			</label>
        			<select name="drum_files" onChange={this.handleFileSelect}>
						{ drumSoundsList }
					</select>
        			<input type="submit" value="Submit" />       					
      			</form>

			</div>
		)
	}
}

const AddDrum = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddDrum);

export default AddDrum;

