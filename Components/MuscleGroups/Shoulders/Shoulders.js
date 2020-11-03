import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Shoulders extends Component {
    render(){
        return(
        <View>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder1")}>
              <Text style={styles.titleSection}> Shoulder1 </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder2")}>
              <Text style={styles.titleSection}> Shoulder2 </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Shoulder3")}>
              <Text style={styles.titleSection}> Shoulder3 </Text>
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
    }
})