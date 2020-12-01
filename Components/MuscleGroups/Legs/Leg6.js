import React, {Component, useState, useCallback, useRef} from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";


export default function App() {
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
        <YoutubePlayer
          height={200}
          play={playing}
          videoId={"2C-uNgKwPLE"}
          onChangeState={onStateChange}
        />
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 35, textAlign: 'center'}}> Bulgarian Split Squat </Text>
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20}}> Equipments </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> Find a bench that you can rest your foot on </Text>
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20, marginTop: 10}}> Instructions </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 1. Get into a forward lunge position with torso uptight, core braced and hips square to your body, with your back foot elevated on the bench </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 2. Lower until your front thigh is almost horizontal, keeping your knee in line with your foot </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 3. Push your hips up, keeping your left leg elevated </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 4. Drive up through your front heel back to starting position </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 5. Repeat </Text>
      </ScrollView>
    );
  }