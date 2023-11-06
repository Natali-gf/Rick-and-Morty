export const characterFragment = `
	fragment characterFields on Character {
		id
		name
		status
		species
		type
		gender
		image
	}
`;

export const locationFragment = `
	fragment locationFields on Location {
		name
		type
		dimension
	}
`;

export const episodeFragment = `
	fragment episodeFields on Episode {
		name
		episode
	}
`;

export const charactersFragment = `
	${characterFragment}
	${locationFragment}
	${episodeFragment}
	fragment allCharacterFields on Character {
		...characterFields
		location {
			...locationFields
		}
		episode {
			...episodeFields
		}
	}
`