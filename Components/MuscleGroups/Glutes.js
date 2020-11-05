import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Glutes extends Component {
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

            <Text style={styles.titleSection}> Glutes </Text>
            <Text style={styles.headerSection}> Glute Bridge </Text>
            <Image source={require("../../assets/glute1.png")}>
            style= {styles.glute1} 
            </Image>
            <Text style={styles.headerSection}> Single Leg Step Up </Text>
            <Text style={styles.headerSection}> Squat </Text>
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
        fontSize: 30,
    },
    headerSection:{
        fontSize: 20,
    },
    glute1:{
        height: 200,
        width: 343,
    }
})