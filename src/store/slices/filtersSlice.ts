import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
	keyWord: string,
	location: {
		name: string,
		type: string,
		dismention: string,
	},
	character: {
		name: string,
		status: string,
		species: string,
		type: string,
		gender: string,
	},
	episode: {
		name: string,
		episode: string,
	}
}

const initialState: InitialState = {
	keyWord: '',
	location: {
		name: '',
		type: '',
		dismention: '',
	},
	character: {
		name: '',
		status: '',
		species: '',
		type: '',
		gender: '',
	},
	episode: {
		name: '',
		episode: '',
	}
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
		saveFilterValues: (state, action) => {
			state.character.name = action.payload.character.name;
			state.character.type = action.payload.character.type;
			state.character.gender = action.payload.character.gender;
			state.character.status = action.payload.character.status;
			state.character.species = action.payload.character.species;

			state.location.name = action.payload.location.name;
			state.location.type = action.payload.location.type;
			state.location.dismention = action.payload.location.dismention;

			state.episode.name = action.payload.episode.name;
			state.episode.episode = action.payload.episode.episode;
		}
    },
});

export const { saveFilterValues } = filtersSlice.actions

export default filtersSlice.reducer;