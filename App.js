import React, {Component} from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import LoadingScreen from './Components/LoadingScreen'
import AppScreen from './Components/AppScreen'
import * as SecureStore from 'expo-secure-store';

export default class App extends Component {
  constructor() {
    super();
    this.state = { loading: true, token: null };
  }

  componentDidMount(){
   setTimeout (()=>{this.checkForToken()},500)
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
        <AppScreen/>
        
        /*
        <View style={styles.container}>
          <Button title="LogIn With Facebook" onPress={() => this.logIn()} />
        </View>*/
        
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
  },
});
