import { ADD_DRUM, DELETE_DRUM } from "../constants/action-types";

export const addDrum = drum => ({
	type: ADD_DRUM,
	payload: drum
});

export const deleteDrum = id => ({
	type: DELETE_DRUM,
	payload: id
});

