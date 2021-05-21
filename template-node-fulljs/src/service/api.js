import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/'
});

export const postform = axios.create({
    baseURL: 'https://webhook.site/f6f7c9ec-e67e-40eb-b6c4-6afba3995153'
});
