import { charactersFragment } from './fragments';

export const charactersQuery = {
	operationName: 'Characters',
	query: `
		${charactersFragment}
		query Characters(
			$page: Int,
			$characterName: String,
			$characterGender: String,
			$characterSpecies: String,
			$characterStatus: String,
			$characterType: String,
			$locationName: String,
			$locationDimension: String,
			$locationType: String,
			$episodeName: String,
			$episodeEpisodes: String,
			$character: Boolean!,
			$location: Boolean!,
			$episode: Boolean!) {
			characters(
				page: $page,
				filter: {
					name: $characterName,
					gender: $characterGender,
					species: $characterSpecies,
					status: $characterStatus,
					type: $characterType
				}) @include(if: $character) {
				info {
					count
					pages
				}
				results {
					...allCharacterFields
				}
			}
			locations(
				page: $page,
				filter: {
					name: $locationName,
					dimension: $locationDimension,
					type: $locationType
				}) @include(if: $location) {
				info {
					count
					pages
				}
				results {
					residents {
						...allCharacterFields
					}
				}
			}
			episodes(
				page: $page,
				filter: {
					name: $episodeName,
					episode: $episodeEpisodes
				}) @include(if: $episode) {
				info {
					count
					pages
				}
				results {
					characters {
						...allCharacterFields
					}
				}
			}
		}
	`,
	variables: {
		page: 1,
		characterName: '',
		characterGender: '',
		characterSpecies: '',
		characterStatus: '',
		characterType: '',
		episodeEpisodes: '',
		episodeName: '',
		locationDimension: '',
		locationName: '',
		locationType: '',
		character: false,
		location: false,
		episode: false,
	},
};

export const characterByIdsQuery = {
	operationName: 'CharacterById',
	query: `
		${charactersFragment}
		query CharacterById($id: ID!) {
			character(id: $id) {
				...allCharacterFields
			}
		}
	`,
};
