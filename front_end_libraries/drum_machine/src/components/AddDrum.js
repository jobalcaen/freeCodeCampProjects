import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addDrum } from '../actions/action-creators';

const mapDispatchToProps = dispatch => {
  return {
    addDrum: drum => dispatch(addDrum(drum))
  }
};

class ConnectedAddDrum extends Component {
	constructor() {
		super();
		this.state = {
			title:""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({title: event.target.value});
		console.log(this.state.title);
	}

	handleSubmit(event) {
		const { title } = this.state;
		console.log('submitted title: ', title);
		this.props.addDrum({title: title});
		this.setState({title:""});
	}

	render() {
		return(
			<div>
				<h1>Drum Form</h1>
				<form onSubmit={this.handleSubmit}>
        			<label>
          				Name:
          			<input 
          				type="text"
          				value={this.state.title}
          				onChange={this.handleChange} 
          			/>
        			</label>
        			<input type="submit" value="Submit" />
      			</form>
			</div>
		)
	}
}

const AddDrum = connect(null, mapDispatchToProps)(ConnectedAddDrum);

export default AddDrum;

