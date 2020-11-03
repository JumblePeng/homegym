import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Glutes extends Component {
    render(){
        return(
        <View>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Glute1")}>
              <Text style={styles.titleSection}> Glute1 </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Glute2")}>
              <Text style={styles.titleSection}> Glute2 </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Glute3")}>
              <Text style={styles.titleSection}> Glute3 </Text>
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