import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Abdominals extends Component {
    render(){
        return(
        <ScrollView>
            <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}
                >
                    <Ionicons
                        name="ios-arrow-round-back"
                        size = {70}
                    />
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab1")}>
              <Text style={styles.titleSection}> Plank </Text>
              <Image source={require("../Abdominals/ab1.jpeg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab2")}>
              <Text style={styles.titleSection}> Crunches </Text>
              <Image source={require("../Abdominals/Crunches.jpg")} style={styles.Image}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab3")}>
              <Text style={styles.titleSection}> Mountain Climbers </Text>
              <Image source={require("../Abdominals/ab3.jpg")} style={styles.Image}></Image>
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
        fontSize: 30,
    },
    Image:{
      height:170,
      width:170
    }
})