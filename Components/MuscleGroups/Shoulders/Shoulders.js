import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Shoulders extends Component {
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
            
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder1")}>
              <Text style={styles.titleSection}> Shoulder Press </Text>
              <Image source={require("../Shoulders/shoulder1.png")}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder2")}>
              <Text style={styles.titleSection}> Lateral Raise </Text>
              <Image source={require("../Shoulders/shoulder2.png")}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder3")}>
              <Text style={styles.titleSection}> Medium Grip Pull-up </Text>
              <Image source={require("../Shoulders/shoulder3.png")}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder4")}>
              <Text style={styles.titleSection}> Hindu Pushup </Text>
              <Image source={require("../Shoulders/shoulder4.png")}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder5")}>
              <Text style={styles.titleSection}> Front Raise </Text>
              <Image source={require("../Shoulders/shoulder5.jpg")}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder6")}>
              <Text style={styles.titleSection}> Standing Shrugs </Text>
              <Image source={require("../Shoulders/shoulder6.png")}>
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