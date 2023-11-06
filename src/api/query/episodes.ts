import { charactersFragment } from './fragments';

export const episodesQuery = {
	operationName: 'Episodes',
	query: `
		${charactersFragment}
		query Episodes(
			$page: Int,
			$episodeName: String,
			$episodeEpisodes: String) {
			episodes(
				page: $page,
				filter: {
					name: $episodeName,
					episode: $episodeEpisodes
				}) {
				results {
					characters {
						...allCharacterFields
					}
				}
			}
		}
	`,
};

