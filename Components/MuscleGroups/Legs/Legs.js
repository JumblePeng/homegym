import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Legs extends Component {
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
            <Text style={{fontSize: 30, fontFamily: "OpenSans-Bold"}}> Leg Workouts </Text>
            </View>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Leg1")}>
              <Text style={styles.titleSection}> Squat Jump </Text>
              <Image source={require("../Legs/squatjump.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Leg2")}>
              <Text style={styles.titleSection}> Side Lunge </Text>
              <Image source={require("../Legs/sidelunge.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Leg3")}>
              <Text style={styles.titleSection}> Single Leg Hip Raises </Text>
              <Image source={require("../Legs/singleleghipraise.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Leg4")}>
              <Text style={styles.titleSection}> Alternating Drop Lunge </Text>
              <Image source={require("../Legs/alternatinglunges.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Leg5")}>
              <Text style={styles.titleSection}> Bulgarian Split Squat Jumps </Text>
              <Image source={require("../Legs/bulsquatjump.jpg")}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Leg6")}>
              <Text style={styles.titleSection}> Bulgarian Split Squat </Text>
              <Image source={require("../Legs/bulsplit.jpg")}>
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
        fontFamily: "OpenSans-SemiBold"
    },
    Image:{
      height:170,
      width:170
    }
})