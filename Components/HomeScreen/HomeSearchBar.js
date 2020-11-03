import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const HomeSearchBar = props => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name='search' alignSelf = {"center"} size = {40} marginHorizontal = {10}/>
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
        </View>
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
    inputStyle:{
        fontSize: 28,
        flex: 1
    },
})

export default HomeSearchBar

/*import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native'

export default function HomeSearchBar() {
    return(<View>
        
    </View>)
}

const styles = StyleSheet.create(
    {
        SearchBar:{
            height: 43,
            width: 343,
        }
    }
)*/