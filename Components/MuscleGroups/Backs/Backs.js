import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Back extends Component {
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
                      color = "blue"
                  />
          </TouchableOpacity>
          <Text style={{fontSize: 30, fontFamily: "OpenSans-Bold"}}> Back Workouts </Text>
          </View>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Back1")}>
              <Text style={styles.titleSection}> Pull up </Text>
              <Image source={require("../Backs/back1.png")} style={styles.Image}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Back2")}>
            <Text style={styles.titleSection}> Reverse Snow Angels </Text>
            <Image source={require("../Backs/back2.jpg")} style={styles.Image}>
            </Image>
            </TouchableOpacity>
            
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Back3")}>
              <Text style={styles.titleSection}> Dolphin Kicks  </Text>
              <Image source={require("../Backs/back3.png")} style={styles.Image} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Back4")}>
              <Text style={styles.titleSection}> Superman Hold </Text>
              <Image source={require("../Backs/back4.jpg")} style={styles.Image} ></Image>
            </TouchableOpacity>
            
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Back5")}>
              <Text style={styles.titleSection}> Pulse Rows </Text>
              <Image source={require("../Backs/back5.jpg")} style={styles.Image} ></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Back6")}>
              <Text style={styles.titleSection}> Reverse Plank </Text>
              <Image source={require("../Backs/back6.jpeg")} style={styles.Image} ></Image>
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
      height:350,
      width:350,
      resizeMode: 'contain',
      
    },
    image:{
      height:350,
      width:350,
      resizeMode: 'contain',
      
    }
})