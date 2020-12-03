import React, {Component, useState} from 'react'
import FacebookSignIn from './Components/FacebookSignIn'
import AppScreen from './Components/AppScreen'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'

import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Ab1 from './Components/MuscleGroups/Abdominals/Ab1'
import Ab2 from './Components/MuscleGroups/Abdominals/Ab2'
import Ab3 from './Components/MuscleGroups/Abdominals/Ab3'
import Ab4 from './Components/MuscleGroups/Abdominals/Ab4'
import Ab5 from './Components/MuscleGroups/Abdominals/Ab5'
import Ab6 from './Components/MuscleGroups/Abdominals/Ab6'

import Back1 from './Components/MuscleGroups/Backs/Back1'
import Back2 from './Components/MuscleGroups/Backs/Back2'
import Back3 from './Components/MuscleGroups/Backs/Back3'
import Back4 from './Components/MuscleGroups/Backs/Back4'
import Back5 from './Components/MuscleGroups/Backs/Back5'
import Back6 from './Components/MuscleGroups/Backs/Back6'


import Bicep1 from './Components/MuscleGroups/Arms/Bicep1'
import Bicep2 from './Components/MuscleGroups/Arms/Bicep2'
import Bicep3 from './Components/MuscleGroups/Arms/Bicep3'
import Forearm1 from './Components/MuscleGroups/Arms/Forearm1'
import Forearm2 from './Components/MuscleGroups/Arms/Forearm2'

import Glute1 from './Components/MuscleGroups/Glutes/Glute1'
import Glute2 from './Components/MuscleGroups/Glutes/Glute2'
import Glute3 from './Components/MuscleGroups/Glutes/Glute3'
import Glute4 from './Components/MuscleGroups/Glutes/Glute4'
import Glute5 from './Components/MuscleGroups/Glutes/Glute5'
import Glute6 from './Components/MuscleGroups/Glutes/Glute6'

import Shoulder1 from './Components/MuscleGroups/Shoulders/Shoulder1'
import Shoulder2 from './Components/MuscleGroups/Shoulders/Shoulder2'
import Shoulder3 from './Components/MuscleGroups/Shoulders/Shoulder3'
import Shoulder4 from './Components/MuscleGroups/Shoulders/Shoulder4'
import Shoulder5 from './Components/MuscleGroups/Shoulders/Shoulder5'
import Shoulder6 from './Components/MuscleGroups/Shoulders/Shoulder6'

import Chest1 from './Components/MuscleGroups/Chest/Chest1'
import Chest2 from './Components/MuscleGroups/Chest/Chest2'
import Chest3 from './Components/MuscleGroups/Chest/Chest3'
import Chest4 from './Components/MuscleGroups/Chest/Chest4'
import Chest5 from './Components/MuscleGroups/Chest/Chest5'
import Chest6 from './Components/MuscleGroups/Chest/Chest6'

import Leg1 from './Components/MuscleGroups/Legs/Leg1'
import Leg2 from './Components/MuscleGroups/Legs/Leg2'
import Leg3 from './Components/MuscleGroups/Legs/Leg3'
import Leg4 from './Components/MuscleGroups/Legs/Leg4'
import Leg5 from './Components/MuscleGroups/Legs/Leg5'
import Leg6 from './Components/MuscleGroups/Legs/Leg6'


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
        <RootStack.Navigator initialRouteName="SignIn">
            <RootStack.Screen name="SignIn" component = {SignIn} options={{ title: 'Sign In Screen'}} />
            <RootStack.Screen name="SignUp" component = {SignUp} options={{ title: 'Sign Up'}} />
            <RootStack.Screen name="AppScreen" component = {AppScreen} options={{ title: 'HomeGym'}} />

                    <RootStack.Screen name="Plank" component={Ab1} />
                    <RootStack.Screen name="Crunches" component={Ab2} />
                    <RootStack.Screen name="Mountain Climbers" component={Ab3} />
                    <RootStack.Screen name="Dead Bug" component={Ab4} />
                    <RootStack.Screen name="Russian Twists" component={Ab5} />
                    <RootStack.Screen name="Side Plank" component={Ab6} />

                    <RootStack.Screen name="Pull Up" component={Back1} />
                    <RootStack.Screen name="Reverse Snow Angels" component={Back2} />
                    <RootStack.Screen name="Dolphin Kicks" component={Back3} />
                    <RootStack.Screen name="Superman Hold" component={Back4} />
                    <RootStack.Screen name="Pulse Rows" component={Back5} />
                    <RootStack.Screen name="Reverse Plank" component={Back6} />

                    <RootStack.Screen name="Chin-Up" component={Bicep1} />
                    <RootStack.Screen name="L-Sit Pull Up" component={Bicep2} />
                    <RootStack.Screen name="Wide Pull Ups" component={Bicep3} />
                    <RootStack.Screen name="Farmer's Carry" component={Forearm1} />
                    <RootStack.Screen name="Wrist Flexion" component={Forearm2} />
                    
                    <RootStack.Screen name="Glute Bridge" component={Glute1} />
                    <RootStack.Screen name="Single Leg Step Up" component={Glute2} />
                    <RootStack.Screen name="Squat" component={Glute3} />
                    <RootStack.Screen name="Donkey Kick" component={Glute4} />
                    <RootStack.Screen name="Clamshell" component={Glute5} />
                    <RootStack.Screen name="Side Lying Leg Lift" component={Glute6} />

                    <RootStack.Screen name="Shoulder Press" component={Shoulder1} />
                    <RootStack.Screen name="Lateral Raise" component={Shoulder2} />
                    <RootStack.Screen name="Medium Grip Pull-Up" component={Shoulder3} />
                    <RootStack.Screen name="Kindu Pushup" component={Shoulder4} />
                    <RootStack.Screen name="Front Raise" component={Shoulder5} />
                    <RootStack.Screen name="Standing Shrugs" component={Shoulder6} />


                    <RootStack.Screen name="Push-Ups" component={Chest1} />
                    <RootStack.Screen name="Wide Grip Push-Up" component={Chest2} />
                    <RootStack.Screen name="Altnerating Shuffle Push-Up" component={Chest3} />
                    <RootStack.Screen name="Diamond Push-Up" component={Chest4} />
                    <RootStack.Screen name="Incline Push-Up" component={Chest5} />
                    <RootStack.Screen name="Chest Press" component={Chest6} />

                    <RootStack.Screen name="Squat Jump" component={Leg1} />
                    <RootStack.Screen name="Side Lunge" component={Leg2} />
                    <RootStack.Screen name="Single Leg Hip Raises" component={Leg3} />
                    <RootStack.Screen name="Altnerating Drop Lunge" component={Leg4} />
                    <RootStack.Screen name="Bulgarian Split Squat Jumps" component={Leg5} />
                    <RootStack.Screen name="Bulgarian Split Squat" component={Leg6} />
        </RootStack.Navigator> 
      </NavigationContainer>
    )
}