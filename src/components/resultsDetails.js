import React from 'react' ;
import {Text, View, StyleSheet, FlatList} from 'react-native' ;
import RestaurantDetails from './RestaurantDetails' ;

const ResultsDetails = ({title, results}) =>
{
    return <View style={styles.container}>
        <Text style={styles.textStyle}>{title}</Text>
        <Text> Total Results found: {results.length}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator = {false}
            data = {results}
            keyExtractor = {_ => _.id}
            renderItem = {({item}) => {
                // return <Text>{item.name} </Text>
                return (
                    // <TouchableOpacity onPress = {() => {navigation.navigate('Particular')}}>
                    <RestaurantDetails details={item} />
                    // </TouchableOpacity>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container:
    {
        marginBottom: 6
    },
    textStyle:
    {
        fontSize: 23,
        fontWeight: 'bold',
        left: 6
    }
}) ;

export default ResultsDetails ;