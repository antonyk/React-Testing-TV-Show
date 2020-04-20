import axios from 'axios';

const apiEndpoint = "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes";

export const fetchShow = () => {
  axios
    .get(apiEndpoint)
    .then(res => { return res.data })
    .catch(err => { throw err})
};
