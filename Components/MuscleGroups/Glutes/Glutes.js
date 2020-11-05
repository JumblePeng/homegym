import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Glutes extends Component {
    render(){
        return(
        <View>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Glute1")}>
              <Text style={styles.titleSection}> Glute Bridge </Text>
            </TouchableOpacity>

            <Image source={require("../Glutes/glute1.png")}>
            </Image>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Glute2")}>
              <Text style={styles.titleSection}> Single Leg Step Up </Text>
            </TouchableOpacity>
            <Image source={require("../Glutes/glute2.png")}>
            </Image>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Glute3")}>
              <Text style={styles.titleSection}> Squat </Text>
            </TouchableOpacity>
            <Image source={require("../Glutes/glute3.png")}>
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
    glute1:{
      height: 200,
      width: 343,
  }
})