import React, {useState} from 'react' ;
import {Text, View, StyleSheet, ScrollView} from 'react-native' ;
import SearchBar from '../components/searchBar' ;
import useResults from '../hooks/useResults' ;
import ResultsDetails from '../components/resultsDetails' ;

const SearchScreen = () =>
{
    const [searchTerm, setSearchTerm] = useState('') ;
    const [errorMessage, results, yelpAPI] = useResults() ;

    const filterResultsByPrice = (price) =>
    {
        return results.filter(results => {
            return results.price === price ;
        })
    }
    
    return <>
        <SearchBar
            term = {searchTerm}
            searchTermChanges = {updatedText => setSearchTerm(updatedText)}
            searchTermCompletes = {() => {
                console.log('Search term entered successfully.')
                yelpAPI(searchTerm)
            }}
        />
        {/* <Text>   Your Search Term is : {searchTerm}</Text> */}
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/* <Text>   We have found out {results.length} results.</Text> */}
        <ScrollView>
        <ResultsDetails results={filterResultsByPrice('$')} title = 'Budget Friendly' />
        <ResultsDetails results={filterResultsByPrice('$$')} title = 'A Bit Pricier' />
        <ResultsDetails results={filterResultsByPrice('$$$')} title = 'Expensive' />
        </ScrollView>
    </>
}

const styles = StyleSheet.create({

})

export default SearchScreen ;