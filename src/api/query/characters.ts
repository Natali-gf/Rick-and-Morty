export const charactersQuery = {
	operationName: 'Characters',
	query: `query Characters($page: Int) {
		characters(page: $page) {
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
	}`,
};
