import React, {Component} from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class MuscleGroupScreen extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}
                >
                    <Ionicons
                        name="ios-arrow-round-back"
                        size = {70}
                    />
                </TouchableOpacity>
            
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Abdominals")}
                    style={{elevation: 8,
                        borderRadius: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 12,
                        backgroundColor: "#BC3535",
                        marginBottom: 10}}
                >
                    <View>
                        <Text style={{fontSize: 30}}> Abdominals </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Back")}
                    style={{elevation: 8,
                        borderRadius: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 12,
                        backgroundColor: '#8B83BE',
                        marginBottom: 10}}
                >
                    <View>
                        <Text style={{fontSize: 30}}> Back </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Biceps")}
                    style={{elevation: 8,
                        borderRadius: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 12,
                        backgroundColor: '#3DB42A',
                        marginBottom: 10}}
                >
                    <View>
                        <Text style={{fontSize: 30}}> Biceps </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Forearms")}
                    style={{elevation: 8,
                        borderRadius: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 12,
                        backgroundColor: '#60A98F',
                        marginBottom: 10}}
                >
                    <View>
                        <Text style={{fontSize: 30}}> Forearms </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Glutes")}
                    style={{elevation: 8,
                        borderRadius: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 12,
                        backgroundColor: '#F4E0E0',
                        marginBottom: 10}}
                >
                    <View>
                        <Text style={{fontSize: 30}}> Glutes </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Shoulders")}
                    style={{elevation: 8,
                        borderRadius: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 12,
                        backgroundColor: '#CACD20',
                        marginBottom: 10}}
                >
                    <View>
                        <Text style={{fontSize: 30}}> Shoulders </Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appButtonContainer: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    }
})