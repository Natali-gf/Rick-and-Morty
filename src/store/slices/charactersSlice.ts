import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import api from '../../api/axios';
import { Status, StatusResponse } from '../../enum/status';
import { ICharacter, ICharacterResponse } from '../../interfaces/character';
import { StatusRequest } from '../../types/statusRequest';
import { charactersQuery, characterByIdsQuery } from '../../api/query/characters';
import { ILocationWithCharacters } from '../../interfaces/location';
import { IEpisodeWithCharacters } from '../../interfaces/episode';
import { IFieldsName } from '../../interfaces/formField';

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
	async function(data: {variables: IFieldsName}, {rejectWithValue}) {
		try {
			const response: AxiosResponse<any, ICharacterResponse> = await api.post('',
				{
					...charactersQuery,
					variables: { ...charactersQuery.variables, ...data.variables },
				}
			);

			if(response.status < StatusResponse.Success
				|| response.status >= StatusResponse.Redirection) {
				throw new Error('Error! Try later.');
			}

			return response.data.data;

		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const fetchCharacterById = createAsyncThunk(
	'characters/fetchCharacterById',
	async function(id: number, {rejectWithValue}) {
		try {
			const response: AxiosResponse<any, ICharacterResponse> = await api.post('',
				{...characterByIdsQuery, variables: {id: id}}
			);

			if(response.status < StatusResponse.Success
				|| response.status >= StatusResponse.Redirection) {
				throw new Error('Error! Try later.');
			}

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
		clearCurrentCharacterData: (state) => {
			state.currentCharacterData = null;
		},
    },
	extraReducers: {
		[fetchCharacters.pending.type]: (state) => {
			state.status = Status.Loading;
			state.error = null;
		},
		[fetchCharacters.fulfilled.type]: (state, action) => {
			const dictIds: {[key: number]: number} = {};
			let idCount: number = 0;
			let characters: ICharacter[] = [];
			let charactersCount: number = 0;
			state.status = Status.Resolved;

			if(action.payload.characters) {
				characters = [...characters, ...action.payload.characters.results];
				charactersCount += action.payload.characters.info.count;
				idCount += 1;
			}
			if(action.payload.locations) {
				action.payload.locations.results.forEach(
					(item: ILocationWithCharacters): void => {
						characters = [...characters, ...item.residents];
						charactersCount += item.residents.length;
					}
				);
				idCount += 1;
			}
			if(action.payload.episodes) {
				action.payload.episodes.results.forEach(
					(item: IEpisodeWithCharacters): void => {
						characters = [...characters, ...item.characters];
						charactersCount += item.characters.length;
					}
				);
				idCount += 1;
			}

			const filteringCharacters = characters.filter((item) => {
				dictIds[item.id]
					? dictIds[item.id] += 1
					: dictIds[item.id] = 1;

				return dictIds[item.id] === idCount;
			});

			state.characters = filteringCharacters;
			state.characterCount = filteringCharacters.length;
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

export const { setCurrentCharacterId, clearCurrentCharacterData } = charactersSlice.actions;

export default charactersSlice.reducer;