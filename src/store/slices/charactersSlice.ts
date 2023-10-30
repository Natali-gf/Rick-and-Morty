import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axios";
import { Status } from "../../enum/status";
import { Character } from "../../interfaces/character";
import { StatusRequest } from "../../types/statusRequest";
import { charactersQuery } from "../../api/query/characters";

type InitialState = {
	status: StatusRequest,
	characters: Character[],
	characterCount: number,
	error: string | null
}

const initialState: InitialState = {
	status: Status.Loading,
    characters: [],
	characterCount: 0,
    error: null,
}

export const fetchCharacters = createAsyncThunk(
	'characters/fetchCharacters',
	async function (page: number) {
		try {
			const response = await api.post('', {...charactersQuery,
				variables: {
					page: page
				}
			});

			return response.data.data;
		} catch (error) {
			console.log(error)
		}
	}
)

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
    },
	extraReducers: {
		[fetchCharacters.fulfilled.type]: (state, action) => {
			state.status = Status.Resolved;
			state.characters = action.payload.characters.results;
			state.characterCount = action.payload.characters.info.count;
		}
	}
});

export default charactersSlice.reducer