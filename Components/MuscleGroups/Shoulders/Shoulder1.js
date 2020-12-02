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
            <Text style={{fontSize: 22, fontFamily: "OpenSans-Bold"}}> Two Arm Shoulder Press </Text>
            </View>

        <YoutubePlayer
          height={200}
          play={playing}
          videoId={"B-aVuyhvLHU"}
          onChangeState={onStateChange}
        />
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20}}> Equipments </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> Two weights or heavy items (ex: textbooks) </Text>
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20, marginTop: 10}}> Instructions </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 1. Begin sitting on a bench or chair, making sure your back is unsupported </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 2. Ensure that your back remains straight throughout, tightening your core </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 3. Bring the two weights down to eye-level view and raise above your head </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 4. Make sure that you do not fully lock your arms as this could result in injury </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 5. Repeat </Text>
      </ScrollView>
    );
  }  
  