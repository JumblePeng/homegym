import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Forearms extends Component {
    render(){
        return(
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}
                >
                    <Ionicons
                        name="ios-arrow-round-back"
                        size = {70}
                    />
            </TouchableOpacity>
            <Text style={{fontSize: 30, fontFamily: "OpenSans-Bold"}}> Arm Workouts </Text>
            </View>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep1")}>
              <Text style={styles.titleSection}> Chin-Up </Text>
              <Image source={require("../Arms/bicep1.jpeg")}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep2")}>
              <Text style={styles.titleSection}> L-Sit pull up  </Text>
              <Image source={require("../Arms/bicep2.png")}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep3")}>
              <Text style={styles.titleSection}> Wide pull ups </Text>
              <Image source={require("../Arms/bicep3.jpeg")}></Image>
            </TouchableOpacity>
            
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Forearm1")}>
              <Text style={styles.titleSection}> Farmer's Carry </Text>
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
      fontSize: 20,
      fontFamily: 'OpenSans-SemiBold'
  },
  Image:{
    height:170,
    width:170
  }
})