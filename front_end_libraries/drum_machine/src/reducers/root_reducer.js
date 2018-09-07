import { ADD_DRUM, DELETE_DRUM } from '../constants/action-types';

const initialState = {
	play_mode: false,
	drums: [],
	drum_files:[
		{
			id: 1,
			name: 'Acoustic Hi Hat 02',
			file: '../drum_audio/acoustic_hat_02.wav'
		},
		{
			id: 2,
			name: 'Wooden Piccolo Snare',
			file: '../drum_audio/wooden_piccolo_snare_01.wav'
		}
	],
};

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_DRUM:
			return {...state, drums:[...state.drums, action.payload]};
		case DELETE_DRUM:
			return {...state, drums:state.drums.filter(drum => drum.id != action.payload)}
		default:
			return state;
	}

};

export default rootReducer;