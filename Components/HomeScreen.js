import React, { Component, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeSearchBar from  './HomeScreen/HomeSearchBar'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    render() {
      return(
        <View style={styles.container}>
            <HomeSearchBar/>

            <TouchableOpacity 
              onPress = {()=> this.props.navigation.navigate("Muscle Groups")}>
              <Image marginBottom={15} source={require("../assets/SearchMuscleGroups.png")}>
              </Image>
            </TouchableOpacity>

            <TouchableOpacity
              onPress = {()=> this.props.navigation.navigate("Calendar")}>
              <Image marginBottom={15} source={require("../assets/Schedule.png")}>
              </Image>
            </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleSection:{
    fontFamily: "OpenSans-SemiBold",
    fontSize: 20,
    padding: 10,
    alignSelf: "center"
  }
})
