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
          <Text style={{fontSize: 30, fontFamily: "OpenSans-Bold"}}> Plank </Text>
          </View>

      <YoutubePlayer
        height={200}
        play={playing}
        videoId={"ASdvN_XEl_c"}
        onChangeState={onStateChange}
      />

      <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20}}> Equipments </Text>
      <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> None </Text>
      <Text style={{fontFamily: "OpenSans-SemiBold", fontSize: 20, marginTop: 10}}> Instructions </Text>
      <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 1. Begin in the plank position, face down with your forearms and toes on the floor. 
                                                                                  Your elbows are directly under your shoulders and your forearms are facing forward. 
                                                                                  Your head is relaxed and you should be looking at the floor. </Text>
      <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 2. Engage your abdominal muscles, drawing your navel toward your spine. 
                                                                                  Keep your torso straight and rigid and your body in a straight line from ears to toes with no sagging or bending. 
                                                                                  This is the neutral spine position. Ensure your shoulders are down, not creeping up toward your ears. 
                                                                                  Your heels should be over the balls of your feet. </Text>
      <Text style={{fontFamily: "OpenSans-Reg", fontSize: 20, marginTop: 10}}> 3. Hold position for desired time </Text>
    </ScrollView>
  );
}