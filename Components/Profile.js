import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Profile extends Component {
    render(){
        return(
        <View style={styles.container}>
            <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}
                >
                    <Ionicons
                        name="ios-arrow-round-back"
                        size = {70}
                    />
            </TouchableOpacity>

            <Text style={styles.titleSection}> Account </Text>

            <Text style={styles.headerSection}> Account Information </Text>

            <Text style={styles.headerSection}> Settings and Notifications </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    titleSection:{
        fontSize: 35,
        marginBottom: 10,
    },
    headerSection:{
        fontSize: 25,
        marginBottom: 10,
    }
})