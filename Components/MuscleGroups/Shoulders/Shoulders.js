import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Shoulders extends Component {
    render(){
        return(
        <View>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder1")}>
              <Text style={styles.titleSection}> Shoulder Press </Text>
            </TouchableOpacity>

            <Image source={require("../Shoulders/shoulder1.png")}>
            </Image>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder2")}>
              <Text style={styles.titleSection}> Lateral Raise </Text>
            </TouchableOpacity>

            <Image source={require("../Shoulders/shoulder2.png")}>
            </Image>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder3")}>
              <Text style={styles.titleSection}> Medium Grip Pull-up </Text>
            </TouchableOpacity>

            <Image source={require("../Shoulders/shoulder3.png")}>
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
    },
    shoulder1: {
      width: 50,
      height: 50,
    },
})