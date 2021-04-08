import axios from 'axios' ;

const yelp = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:
    {
        Authorization: 'Bearer API_KEY_HERE'
    }
})

export default yelp ;