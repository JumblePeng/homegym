import React, { Component, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Components/HomeScreen/Header'
import HomeSearchBar from  './HomeScreen/HomeSearchBar'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    render() {
      return(
        <View style={styles.container}>
            <Header/>
            <HomeSearchBar/>

            <TouchableOpacity 
              onPress = {()=> this.props.navigation.navigate("Muscle Groups")}
              style={styles.appButtonContainer1}
            >
              <Text style={styles.titleSection}> Search by Muscle Groups </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress = {()=> this.props.navigation.navigate("Calendar")}
              style={styles.appButtonContainer2}
            >
              <Text style={styles.titleSection}> Your Schedule </Text>
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
  appButtonContainer1: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 10
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: "#8B83BE",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 90,
    marginBottom: 10
  },
  titleSection:{
    fontSize: 24,
    padding: 10,
    alignSelf: "center"
  }
})
