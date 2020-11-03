import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './HomeScreen'
import Navigator from './Navigator'
import CalendarTask from './CalendarTask'
import Profile from './Profile'

const RootStack = createBottomTabNavigator()

export default class AppScreen extends Component {
  render() {
    return(
      <NavigationContainer>
        <RootStack.Navigator 
        screenOptions={({route})=>({
            tabBarIcon: ({color, size})=>{
              let iconName 
              if(route.name === "Home"){
                iconName = "ios-home"
              }else if(route.name === "Muscle Groups"){
                iconName = "ios-body"
              }else if(route.name === "Calendar"){
                iconName = "ios-calendar"
              }else if(route.name === "Profile"){
                iconName = "ios-contact"
              }
              return <Ionicons name = {iconName} size={size} color={color} /> 
            },
        })}
        
        tabBarOptions = {{ // can use this to edit top name and set arrow colors, etc
          activeTintColor: 'blue', // find wrappers for custom fonts to load from assets folder
          inactiveTintColor: 'gray' //supernova 
        }}
        initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Muscle Groups" component={Navigator} />
          <RootStack.Screen name="Calendar" component={CalendarTask} />
          <RootStack.Screen name="Profile" component={Profile} />

        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}
