import { ADD_DRUM } from '../constants/action-types';

const initialState = {
	drums: [
		{
			title:"default",
			id: 1
		}
	]
};

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_DRUM:
			return {...state, drums:[...state.drums, action.payload]};
		default:
			return state;
	}

};

export default rootReducer;