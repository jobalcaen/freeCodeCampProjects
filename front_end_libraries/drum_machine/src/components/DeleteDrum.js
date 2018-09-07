import React from 'react';
import { connect } from 'react-redux';
import { deleteDrum } from '../actions/action-creators';


const mapDispatchToProps = dispatch => {
  return {
    deleteDrum: id => {
      dispatch(deleteDrum(id))
    }
  }
}

const ConnectedDeleteDrum = (props) => (
	<i onClick={()=>props.deleteDrum(props.id)} className="fas fa-trash-alt"></i>
);

const DeleteDrum = connect(null, mapDispatchToProps)(ConnectedDeleteDrum);

export default DeleteDrum;