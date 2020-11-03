import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Abdominals extends Component {
    render(){
        return(
        <View>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab1")}>
              <Text style={styles.titleSection}> Ab1 </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab2")}>
              <Text style={styles.titleSection}> Ab2 </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("Ab3")}>
              <Text style={styles.titleSection}> Ab3 </Text>
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