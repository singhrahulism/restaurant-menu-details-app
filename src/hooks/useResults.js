import {useState, useEffect} from 'react' ;
import yelp from '../api/yelp' ;

const useResults = () =>
{
    const [results, setResults] = useState([]) ;
    const [errorMessage, setErrorMessage] = useState('') ;

    const yelpAPI = async (apiSearchTerm) =>
    {
        try
        {
            const response = await yelp.get('/search', {
                params:
                {
                    term: apiSearchTerm,
                    limit: 50,
                    location: 'new york'
                }
            })
            setResults(response.data.businesses)
            {console.log(results)}
        } catch(err)
        {
            setErrorMessage('Something\'s wrong, I can feel it.' )
            console.log(err)
        }
    } ;

    useEffect(() => {
        yelpAPI('salad')
    }, [])

    return [errorMessage, results, yelpAPI] ;
}

export default useResults ;