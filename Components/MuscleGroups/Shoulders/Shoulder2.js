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
            <Text style={{fontSize: 22, fontFamily: "OpenSans-Bold"}}> Lateral Raise </Text>
            </View>

        <YoutubePlayer
          height={200}
          play={playing}
          videoId={"3VcKaXpzqRo"}
          onChangeState={onStateChange}
        />
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20}}> Equipments </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> Two weights or heavy items (ex: gallon of water, textbook, etc) </Text>
        <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20, marginTop: 10}}> Instructions </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 1. Begin standing fully upright with the weights in either hand by your side </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 2. Ensure that your back remains straight throughout, tightening your core </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 3. Bring the two weights up until your shoulder is completely straight until your hands </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 4. Bring the weights slowly back down to your sides </Text>
        <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 5. Repeat </Text>
      </ScrollView>
    );
  }

  