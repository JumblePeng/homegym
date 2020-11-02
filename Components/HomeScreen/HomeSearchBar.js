import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native'

export default function HomeSearchBar() {
    return(<View>
        <ImageBackground source={require("../../assets/searchBar.png")}
                        style= {styles.SearchBar} 
        >
        </ImageBackground>
    </View>)
}

const styles = StyleSheet.create(
    {
        /*container:{
            height: 160,
            paddingTop: 10
        },*/

        SearchBar:{
            height: 43,
            width: 343,
        }
    }
)