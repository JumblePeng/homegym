import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Chests extends Component {
    render(){
        return(
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Chest1")}>
              <Text style={styles.titleSection}> Push-Ups </Text>
              <Image source={require("../Chest/pushup.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Chest2")}>
              <Text style={styles.titleSection}> Wide Grip Push-Up </Text>
              <Image source={require("../Chest/widegrippushup.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Chest3")}>
              <Text style={styles.titleSection}> Alternating Shuffle Push-Up </Text>
              <Image source={require("../Chest/altpushup.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Chest4")}>
              <Text style={styles.titleSection}> Diamond Push-Up </Text>
              <Image source={require("../Chest/diapushup.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Chest5")}>
              <Text style={styles.titleSection}> Incline Push-Up </Text>
              <Image source={require("../Chest/incpushup.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Chest6")}>
              <Text style={styles.titleSection}> Chest Press </Text>
              <Image source={require("../Chest/chestpress.jpg")}>
            </Image>
            </TouchableOpacity>
        </ScrollView>
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
        fontSize: 20,
        fontFamily: 'OpenSans-SemiBold'
    },
    Image:{
      height:170,
      width:170
    }
})