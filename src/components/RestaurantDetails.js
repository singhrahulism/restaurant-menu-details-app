import React from 'react' ;
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native' ;
import {withNavigation} from 'react-navigation' ;

const RestaurantDetails = ({details, navigation}) =>
{
    return <View>
        <Image style={styles.imageStyle} source={{uri: details.image_url}} />
        <TouchableOpacity onPress = {() => {navigation.navigate('Particular')}}>
        <Text style={styles.titleStyle}> {details.name}</Text>
        </TouchableOpacity>
        <Text style={styles.addonStyle}>{details.rating} Stars, {details.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    imageStyle:
    {
        width: 275,
        height: 175,
        borderRadius: 6,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 4
    },
    titleStyle:
    {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 5
    },
    addonStyle:
    {
        marginLeft: 9,
        color: 'grey'
    }
}) ;

export default withNavigation(RestaurantDetails) ;