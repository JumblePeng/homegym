import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Abdominals extends Component {
    render(){
        return(
        <View>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep1")}>
              <Text style={styles.titleSection}> Chin-up </Text>
            </TouchableOpacity>
            <Image source={require("../Biceps/bicep1.jpeg")} style={styles.Image}>
            </Image>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep2")}>
              <Text style={styles.titleSection}> L-Sit pull up  </Text>
            </TouchableOpacity>
            <Image source={require("../Biceps/bicep2.png")} style={styles.Image}>
            </Image>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep3")}>
              <Text style={styles.titleSection}> Wide pull ups </Text>
              <Image source={require("../Biceps/bicep3.jpeg")} style={styles.Image}></Image>
            </TouchableOpacity>
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
    Image:{
      height:170,
      width:170,
      resizeMode:"contain"
    }
})