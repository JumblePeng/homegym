import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Abdominals extends Component {
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
            <Text style={{fontSize: 30, fontFamily: "OpenSans-Bold"}}> Abdominals Workouts </Text>
            </View>
            


            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab1")}>
              <Text style={styles.titleSection}> Plank </Text>
              <Image source={require("../Abdominals/ab1.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab2")}>
              <Text style={styles.titleSection}> Crunches </Text>
              <Image source={require("../Abdominals/ab2.jpg")} style={styles.Image}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab3")}>
              <Text style={styles.titleSection}> Mountain Climbers </Text>
              <Image source={require("../Abdominals/ab3.jpg")} style={styles.Image2}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab4")}>
              <Text style={styles.titleSection}> Dead Bug </Text>
              <Image source={require("../Abdominals/ab4.jpg")} style={styles.Image3}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab5")}>
              <Text style={styles.titleSection}> Russian Twists </Text>
              <Image source={require("../Abdominals/ab5.jpg")} style={styles.Image4}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab6")}>
              <Text style={styles.titleSection}> Side Plank </Text>
              <Image source={require("../Abdominals/ab6.jpg")} style={styles.Image5}></Image>
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
    width:350
  },
  Image2:{
    height:350,
    width:350
  },
  Image3:{
    height:350,
    width:350
  },

  Image4:{
    height:350,
    width:350
  },

  Image5:{
    height:190,
    width:350
  },


})