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
            <Text style={{fontSize: 22, fontFamily: "OpenSans-Bold"}}> Squat Jump </Text>
            </View>

        <YoutubePlayer
          height={200}
          play={playing}
          videoId={"U4s4mEQ5VqU"}
          onChangeState={onStateChange}
        />
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20}}> Equipments </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> None </Text>
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20, marginTop: 10}}> Instructions </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 1. Stand with your feet shoulder width apart </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 2. Start by doing a regular squat, engage your core, and jump up explosively </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 3. When you land, lower your body back into the squat position to complete one rep </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 4. Repeat </Text>
      </ScrollView>
    );
  }