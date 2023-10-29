import axios from 'axios';

export default axios.create({
    baseURL: 'https://rickandmortyapi.com/graphql',
    headers: {
        'content-type': 'application/json',
    },
});