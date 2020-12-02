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
            <Text style={{fontSize: 30, fontFamily: "OpenSans-Bold"}}> Wide Pull-Ups </Text>
            </View>

        <YoutubePlayer
          height={200}
          play={playing}
          videoId={"KxgqkyrzrNk"}
          onChangeState={onStateChange}
        />

        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20}}> Equipments </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> Pull-Up Bar, Monkey Bar, etc. </Text>
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20, marginTop: 10}}> Instructions </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 1. Grab onto the bar with your palms facing away your face, making a 110 degree angle between your hands and shoulder </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 2. Fully extend your arms, ensuring your legs are completely straight, not touching the floor </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 3. Pull yourself up until your chin is slightly above the bar </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 4. Bring yourself back down, fully extending your arms </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 5. Repeat </Text>
      </ScrollView>
    );
  }