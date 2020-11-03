import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> HomeGym </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 48,
            width: '100%',
            borderColor: 'white',
            borderWidth: 1,
            margin: 20,
            paddingTop: 25,
        },

        title: {
            fontSize: 35
        }
    }
)