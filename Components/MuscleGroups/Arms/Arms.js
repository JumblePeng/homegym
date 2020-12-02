import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Forearms extends Component {
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

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep1")}>
              <Text style={styles.titleSection}> Chin-up </Text>
              <Image source={require("../Arms/bicep1.jpeg")} style={styles.Image}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep2")}>
              <Text style={styles.titleSection}> L-Sit pull up  </Text>
              <Image source={require("../Arms/bicep2.png")} style={styles.Image}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep3")}>
              <Text style={styles.titleSection}> Wide pull ups </Text>
              <Image source={require("../Arms/bicep3.jpeg")} style={styles.Image}></Image>
            </TouchableOpacity>
            
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Forearm1")}>
              <Text style={styles.titleSection}> Farmers Carry </Text>
              <Image source={require("../Arms/forearm2.png")}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Forearm2")}>
              <Text style={styles.titleSection}> Wrist Flexion </Text>
              <Image source={require("../Arms/forearm1.jpg")}>
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
        fontSize: 30,
    }
})