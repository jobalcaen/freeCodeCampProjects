import { ADD_DRUM, DELETE_DRUM, RETURN_DRUM_FILEPATH } from '../constants/action-types';
console.log(drumObjects);


const initialState = {
	play_mode: false,
	drums: [],
	drum_files:[
		{ name: 'clap01',
	    path: '/src/drum_audio/electro/electro-05-clap01.wav' },
	  { name: 'clap02',
	    path: '/src/drum_audio/electro/electro-05-clap02.wav' },
	  { name: 'clhat01',
	    path: '/src/drum_audio/electro/electro-05-clhat01.wav' },
	  { name: 'clhat02',
	    path: '/src/drum_audio/electro/electro-05-clhat02.wav' },
	  { name: 'clhat03',
	    path: '/src/drum_audio/electro/electro-05-clhat03.wav' },
	  { name: 'clhat04',
	    path: '/src/drum_audio/electro/electro-05-clhat04.wav' },
	  { name: 'kick01',
	    path: '/src/drum_audio/electro/electro-05-kick01.wav' },
	  { name: 'kick02',
	    path: '/src/drum_audio/electro/electro-05-kick02.wav' },
	  { name: 'ophat01',
	    path: '/src/drum_audio/electro/electro-05-ophat01.wav' },
	  { name: 'ophat02',
	    path: '/src/drum_audio/electro/electro-05-ophat02.wav' },
	  { name: 'snr01',
	    path: '/src/drum_audio/electro/electro-05-snr01.wav' },
	  { name: 'snr02',
	    path: '/src/drum_audio/electro/electro-05-snr02.wav' },
	  { name: 'snr03',
	    path: '/src/drum_audio/electro/electro-05-snr03.wav' },
	  { name: 'snr04',
	    path: '/src/drum_audio/electro/electro-05-snr04.wav' }
	],
};

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_DRUM:
			return {...state, drums:[...state.drums, action.payload]};
		case DELETE_DRUM:
			return {...state, drums:state.drums.filter(drum => drum.id != action.payload)};
		default:
			return state;
	}

};

export default rootReducer;