import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class Biceps extends Component {
    render(){
        return(
        <View>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep1")}>
              <Text style={styles.titleSection}> Bicep1 </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep2")}>
              <Text style={styles.titleSection}> Bicep2 </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Bicep3")}>
              <Text style={styles.titleSection}> Bicep3 </Text>
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