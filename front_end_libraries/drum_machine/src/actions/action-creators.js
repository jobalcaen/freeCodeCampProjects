import { ADD_DRUM } from "../constants/action-types";

export const addDrum = drum => ({
	type: ADD_DRUM,
	payload: drum
});