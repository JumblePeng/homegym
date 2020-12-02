import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default class Chests extends Component {
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
            <Text style={{fontSize: 30, fontFamily: "OpenSans-Bold"}}> Glute Workouts </Text>
            </View>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Glute1")}>
              <Text style={styles.titleSection}> Glute Bridge </Text>
              <Image source={require("../Glutes/glute1.png")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Glute2")}>
              <Text style={styles.titleSection}> Single Leg Step Up </Text>
              <Image source={require("../Glutes/glute2.png")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Glute3")}>
              <Text style={styles.titleSection}> Squat </Text>
              <Image source={require("../Glutes/glute3.png")}>
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