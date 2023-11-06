import { IFormField } from '../interfaces/formField';

export const characterFormFields: IFormField[] = [
	{
		name: 'characterName',
		placeholder: 'Add Name',
		type: 'text',
	},
	{
		name: 'characterStatus',
		placeholder: 'Add Status',
		type: 'text',
	},
	{
		name: 'characterSpecies',
		placeholder: 'Add Species',
		type: 'text',
	},
	{
		name: 'characterType',
		placeholder: 'Add Type',
		type: 'text',
	},
	{
		name: 'characterGender',
		placeholder: 'Add Gender',
		type: 'text',
	},
];

export const locationFormFields: IFormField[] = [
	{
		name: 'locationName',
		placeholder: 'Add Name',
		type: 'text',
	},
	{
		name: 'locationType',
		placeholder: 'Add Type',
		type: 'text',
	},
	{
		name: 'locationDimension',
		placeholder: 'Add Dimension',
		type: 'text',
	},
];

export const episodeFormFields: IFormField[] = [
	{
		name: 'episodeName',
		placeholder: 'Add Name',
		type: 'text',
	},
	{
		name: 'episodeEpisodes',
		placeholder: 'Add Episodes',
		type: 'text',
	},
];