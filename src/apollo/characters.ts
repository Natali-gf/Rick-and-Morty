import {gql} from '@apollo/client';

export const characters = `
	query Characters {
		characters {
			info {
				count
			}
			results {
				id
				name
				status
				species
				type
				gender
				image
				location {
					name
					type
					dimension
				}
				episode {
					name
					episode
				}
			}
		}
	}
`;
