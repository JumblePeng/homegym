import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function LoadingScreen(){

    return(<View style={styles.container}>
        <Text style={styles.titleSection}> HomeGym </Text>
        <Text style={styles.subheader}> Your Home Fitness App </Text>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#96C5BD'
    },
    titleSection:{
        fontSize: 30,
    },
    subheader:{
        fontSize: 22,
    }
})