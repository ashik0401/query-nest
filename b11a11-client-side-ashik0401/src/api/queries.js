import axios from 'axios';

export const queries = () => {
    return axios
        .get('https://query-nest-two.vercel.app/queries',)
        .then(res => res.data);
};
