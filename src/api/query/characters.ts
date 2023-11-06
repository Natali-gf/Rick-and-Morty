import { charactersFragment } from "./fragments";

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
			$hasFilterCharacter: Boolean!,
			$hasFilterLocation: Boolean!,
			$hasFilterEpisode: Boolean!) {
			characters(
				page: $page,
				filter: {
					name: $characterName,
					gender: $characterGender,
					species: $characterSpecies,
					status: $characterStatus,
					type: $characterType
				}) @include(if: $hasFilterCharacter) {
				info {
					count
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
				}) @include(if: $hasFilterLocation) {
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
				}) @include(if: $hasFilterEpisode) {
				results {
					characters {
						...allCharacterFields
					}
				}
			}
		}
	`,
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
