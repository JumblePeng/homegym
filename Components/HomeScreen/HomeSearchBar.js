import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {Searchbar} from 'react-native-paper'


const HomeSearchBar = props => {
    const [searchQuery, setSearchQuery ] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    
    return(
        <Searchbar style={styles.backgroundStyle}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />

        /*<View style={styles.backgroundStyle}>
            <Feather name='search' size = {32} />
            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
                onChangeText={
                    newTerm => props.onNewText(newTerm)
                }
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={() => props.onDoneText()}
            />
        </View>*/
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: 'rgb(224, 223, 220)',
        paddingHorizontal: 16,
        paddingVertical: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 20,
        marginVertical: 20,
        alignItems: "center",
        marginHorizontal: 10,
    },
})

export default HomeSearchBar