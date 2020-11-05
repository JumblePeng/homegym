import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Forearms extends Component {
    render(){
        return(
        <View>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Forearm1")}>
              <Text style={styles.titleSection}> Farmers Carry </Text>
            </TouchableOpacity>

            <Image source={require("../Forearms/forearm2.png")}>
            </Image>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Forearm2")}>
              <Text style={styles.titleSection}> Wrist Flexion </Text>
            </TouchableOpacity>

            <Image source={require("../Forearms/forearm1.jpg")}>
            </Image>
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
    }
})