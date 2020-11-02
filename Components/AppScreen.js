import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './HomeScreen'
import MuscleGroupScreen from './MuscleGroupScreen'
import Calendar from './Calendar'
import Profile from './Profile'

import Abdominals from './MuscleGroups/Abdominals'

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
        
        tabBarOptions = {{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray'
        }}
        initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Muscle Groups" component={MuscleGroupScreen} />
          <RootStack.Screen name="Calendar" component={Calendar} />
          <RootStack.Screen name="Profile" component={Profile} />

          <RootStack.Screen name="Abdominals" component={Abdominals} />

        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}
