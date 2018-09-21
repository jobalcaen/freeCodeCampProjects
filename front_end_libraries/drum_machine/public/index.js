import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../src/pages/Main';
import { Provider } from "react-redux";

import '../styles.css';
import store from '../src/store/store';
import  { addDrum } from '../src/actions/action-creators';


ReactDOM.render(
		<Provider store={store}>
			<Main />
		</Provider>
,
	document.getElementById('root'));

window.store = store;
window.addDrum = addDrum;

