import { createSlice } from '@reduxjs/toolkit';
import { IFieldsName } from '../../interfaces/formField';

type InitialState = {
	filters: IFieldsName,
};

const initialState: InitialState = {
	filters: {
		page: 1,
		character: true,
	}
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
		saveFilterValues: (state, action) => {
			state.filters = action.payload.variables
		},
    },
});

export const { saveFilterValues } = filtersSlice.actions

export default filtersSlice.reducer;