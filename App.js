import React, {Component, useState} from 'react'
import FacebookSignIn from './Components/FacebookSignIn'
import AppScreen from './Components/AppScreen'

import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { AppLoading } from 'expo';
import * as Font from 'expo-font';


const fetchFont = () => {
  return Font.loadAsync({
    'OpenSans-Reg': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const RootStack = createStackNavigator()

export default function App () {
  const [fontLoaded, setfontLoaded] = useState(false);
  if(!fontLoaded){
    return ( 
      <AppLoading startAsync={fetchFont}
        onError = {() => console.log("ERROR")}
        onFinish= {() => {
        setfontLoaded(true)
        }}
      />
    );
  }

    return(
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="FacebookSignIn">
            <RootStack.Screen name="FacebookSignIn" component = {FacebookSignIn} options={{ title: 'Sign In Screen'}} />
            <RootStack.Screen name="AppScreen" component = {AppScreen} options={{ title: 'HomeGym'}} />
        </RootStack.Navigator>
      </NavigationContainer>
    )
}