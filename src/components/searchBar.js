import React from 'react' ;
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native' ;
import {FontAwesome5} from '@expo/vector-icons' ;

const VIEW_COLOR = 120 ;

const SearchBar = ({term, searchTermChanges, searchTermCompletes}) =>
{
    return <View style={styles.viewStyle}>
        <FontAwesome5 style={styles.iconStyle} name='search' size={17}/>
        <TextInput
            style = {styles.textInputStyle}
            autoCapitalize = 'none'
            autoCorrect = {false}
            placeholder = 'Search'
            placeholderTextColor = 'white'
            value = {term}
            onChangeText = {updatedText => searchTermChanges(updatedText)}
            onEndEditing = {() => searchTermCompletes()}
        />
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress = {() => searchTermCompletes()}
        >
            <Text>Search</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    viewStyle:
    {
        height: 30,
        margin: 8,
        backgroundColor: `rgb(${VIEW_COLOR}, ${VIEW_COLOR}, ${VIEW_COLOR})`,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle:
    {
        flex: 4,
        left: 6
    },
    textInputStyle:
    {
        // borderColor: 'red',
        // borderWidth: 3,
        flex: 40,
        right: 6,
        paddingLeft: 5,
        color: 'white'
    },
    buttonStyle:
    {
        alignSelf: 'flex-end',
        top: -6,
        flex: 6,
        right: 2
    }
}) ;

export default SearchBar ;