import React, {Component, useState, useCallback, useRef} from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ReactPlayer from "react-player"
import YouTube from 'react-native-youtube';
import WebView from 'react-native-webview';
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
      <View>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={"KxgqkyrzrNk"}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      </View>
    );
  }