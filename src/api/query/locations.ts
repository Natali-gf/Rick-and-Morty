import { charactersFragment } from './fragments';

export const charactersQuery = {
	operationName: 'Locations',
	query: `
		${charactersFragment}
		query Locations(
			$page: Int,
			$locationName: String,
			$locationDimension: String,
			$locationType: String) {
			locations(
				page: $page,
				filter: {
					name: $locationName,
					dimension: $locationDimension,
					type: $locationType
				}) {
				results {
					residents {
						...allCharacterFields
					}
				}
			}
		}
	`,
};
