import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"
import * as Google from 'expo-google-app-auth'
import {FontAwesome} from '@expo/vector-icons'

export default class App extends React.Component {

  async logIn() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
        "429938106706-cqu985eqbpspkmphuibi2g9teu5s2sq4.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      });
      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FontAwesome.Button name = "google" backgroundColor = "#0000FF" onPress={() => this.logIn()}>
              Sign in with Google
        </FontAwesome.Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  }
})