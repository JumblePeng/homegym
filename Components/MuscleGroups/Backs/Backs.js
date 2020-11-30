import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Back extends Component {
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

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Back1")}>
              <Text style={styles.titleSection}> Pull up </Text>
              <Image source={require("../Backs/back1.png")} style={styles.Image}>
            </Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Back2")}>
            <Text style={styles.titleSection}> Reverse Snow Angels </Text>
            <Image source={require("../Backs/back2.png")} style={styles.Image}>
            </Image>
            </TouchableOpacity>
            
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Back3")}>
              <Text style={styles.titleSection}> Dolphin Kicks  </Text>
              <Image source={require("../Backs/back3.png")} style={styles.Image} ></Image>
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
      height:190,
      width:190,
      resizeMode: 'contain',
      
    },
    image:{
      height:230,
      width:230,
      resizeMode: 'contain',
      
    }
})