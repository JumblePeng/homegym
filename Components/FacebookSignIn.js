import React, {Component} from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as SecureStore from 'expo-secure-store';
import LoadingScreen from './LoadingScreen'
import AppScreen from './AppScreen'

import {FontAwesome} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class FacebookSignIn extends Component {
  constructor() {
    super();
    this.state = { loading: true, token: null };
  }

  componentDidMount(){
   setTimeout (()=>{this.checkForToken()}, 1000)
  }


  //Check Async Storage if token is available
  //If it is available set loading state to false 
  async checkForToken(){
     let token = await SecureStore.getItemAsync('token1')
     console.log(token)
    this.setState({
      token: token,
      loading: false
    })
  }

  //Write token to secure storage. 
  async saveTokenToSecureStorage(token){
     SecureStore.setItemAsync("token2", token)
     this.setState({
       token: token
     })
  }


  render() {
    if(this.state.loading === true){
      return(<LoadingScreen/>)
    }else if(this.state.token === null){
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 35, marginBottom: 400, fontFamily: "OpenSans-Reg", color: "#FFFFFF"}}> Connection </Text>

            <FontAwesome.Button name = "facebook" backgroundColor = "#3b5998" onPress={() => this.logIn()}>
              Sign in with Facebook
            </FontAwesome.Button>

            <TouchableOpacity 
              onPress = {()=> this.props.navigation.replace("AppScreen")}
            >
              <Text style={{color: "#FBDF00", marginTop: 20}}> or Continue as Guest </Text>
            </TouchableOpacity>
        </View>
        
      );
    }
    else{
      return(<AppScreen/>)
    }
  }

  async logIn() {
    try {
      //Seed documentation on course site at mobileappdev.teachable.com
      //For default user names and passwords.
      await Facebook.initializeAsync({
        appId: '3439564352787812',
      });
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        this.saveTokenToSecureStorage(token)
        //Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#96C5BD',
  },
});
