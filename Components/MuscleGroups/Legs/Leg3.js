import React, {Component, useState, useCallback, useRef} from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';


export default function App({navigation}) {
    const [playing, setPlaying] = useState(false);
  
    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
    
    return (
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                >
                    <Ionicons
                        name="ios-arrow-round-back"
                        size = {70}
                        color = "blue"
                    />
            </TouchableOpacity>
            <Text style={{fontSize: 22, fontFamily: "OpenSans-Bold"}}> Single Leg Hip Raises </Text>
            </View>

        <YoutubePlayer
          height={200}
          play={playing}
          videoId={"-GMmdGzGlwY"}
          onChangeState={onStateChange}
        />
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20}}> Equipments </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> None </Text>
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20, marginTop: 10}}> Instructions </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 1. Lie on your back with your knee bent and right foot flat on the floor </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 2. Raise your left leg so it's in line with your right thigh </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 3. Push your hips up, keeping your left leg elevated </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 4. Pause and slowly return to the starting position </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 5. Switch legs and repeat </Text>
      </ScrollView>
    );
  }