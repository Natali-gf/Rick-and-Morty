export type IFormField = {
	name: string,
	placeholder: string,
	type: string,
};

export type IFieldsName = {
	page: number,
	characterName?: string,
	characterGender?: string,
	characterSpecies?: string,
	characterStatus?: string,
	characterType?: string,
	episodeEpisodes?: string,
	episodeName?: string,
	locationDimension?: string,
	locationName?: string,
	locationType?: string,
	character?: boolean,
	location?: boolean,
	episode?: boolean,
};