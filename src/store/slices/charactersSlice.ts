import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import api from '../../api/axios';
import { Status } from '../../enum/status';
import { ICharacter, ICharacterResponse } from '../../interfaces/character';
import { StatusRequest } from '../../types/statusRequest';
import { charactersQuery, characterByIdsQuery } from '../../api/query/characters';

type InitialState = {
	status: StatusRequest,
	characters: ICharacter[],
	currentCharacterData: ICharacter | null,
	currentCharacterId: number,
	characterCount: number,
	error: string | null
};

const initialState: InitialState = {
	status: Status.Loading,
	currentCharacterId: 1,
	currentCharacterData: null,
    characters: [],
	characterCount: 0,
    error: null,
};

export const fetchCharacters = createAsyncThunk(
	'characters/fetchCharacters',
	async function(data: any, {rejectWithValue}) {
		console.log(data.variables);
		try {
			const response: AxiosResponse<any, ICharacterResponse> = await api.post('',
				{...charactersQuery, variables: data.variables}
			);

			if(response.status < 200 || response.status > 299) {
				throw new Error('Error! Try later.');
			}
			console.log(response.data.data);

			return response.data.data.characters;

		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const fetchCharacterById = createAsyncThunk(
	'characters/fetchCharacterById',
	async function(id: number, {rejectWithValue}) {
		console.log(id);
		try {
			const response: AxiosResponse<any, ICharacterResponse> = await api.post('',
				{...characterByIdsQuery, variables: {id: id}}
			);

			if(response.status < 200 || response.status > 299) {
				throw new Error('Error! Try later.');
			}
			console.log(response.data.data.characte);

			return response.data.data.character;

		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
		setCurrentCharacterId: (state, action) => {
			state.currentCharacterId = action.payload;
		},
    },
	extraReducers: {
		[fetchCharacters.pending.type]: (state) => {
			state.status = Status.Loading;
			state.error = null;
		},
		[fetchCharacters.fulfilled.type]: (state, action) => {
			state.status = Status.Resolved;
			state.characters = action.payload.results;
			state.characterCount = action.payload.info.count;
		},
		[fetchCharacters.rejected.type]: (state, action) => {
			state.status = Status.Rejected;
			state.error = action.payload.message;
		},

		[fetchCharacterById.pending.type]: (state) => {
			state.status = Status.Loading;
			state.error = null;
		},
		[fetchCharacterById.fulfilled.type]: (state, action) => {
			state.status = Status.Resolved;
			state.currentCharacterData = action.payload;
		},
		[fetchCharacterById.rejected.type]: (state, action) => {
			state.status = Status.Rejected;
			state.error = action.payload.message;
		},
	},
});

export const { setCurrentCharacterId } = charactersSlice.actions;

export default charactersSlice.reducer;