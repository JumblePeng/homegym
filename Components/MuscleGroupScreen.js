import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default class MuscleGroupScreen extends Component {
    render(){
        return(
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>            
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Abdominals")}>
                    <Image style={{marginBottom: 15}} source={require("../assets/Abs.png")}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Arms")}>
                    <Image marginBottom={15} source={require("../assets/Arms.png")}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Back")}>
                    <Image marginBottom={15} source={require("../assets/Back.png")}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Chests")}>
                    <Image marginBottom={15} source={require("../assets/Chest.png")}>
                    </Image>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Glutes")}>
                    <Image marginBottom={15} source={require("../assets/Glutes.png")}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Legs")}>
                    <Image marginBottom={15} source={require("../assets/Legs.png")}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Shoulders")}>
                    <Image marginBottom={15} source={require("../assets/Shoulders.png")}>
                    </Image>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}