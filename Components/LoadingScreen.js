import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default function LoadingScreen(){

    return(
        <View style={styles.container}>
            <Text style={{fontSize: 20,
                        fontFamily: "OpenSans-Reg",
                        color: "#FFFFFF",
                        borderRadius: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 12,
                        backgroundColor: "#96C5BD",
                        marginBottom: 10}}>   Loading... </Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#96C5BD'
    },
})