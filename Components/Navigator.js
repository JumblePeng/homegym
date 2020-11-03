import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import MuscleGroupScreen from './MuscleGroupScreen'
import Abdominals from './MuscleGroups/Abdominals'
import Back from './MuscleGroups/Back'
import Biceps from './MuscleGroups/Biceps'
import Forearms from './MuscleGroups/Forearms'
import Glutes from './MuscleGroups/Glutes'
import Shoulders from './MuscleGroups/Shoulders'

const RootStack = createStackNavigator()

export default class Navigator extends Component {
    render(){
        return(
                <RootStack.Navigator initialRouteName="MuscleGroupScreen">
                    <RootStack.Screen name="MuscleGroupScreen" component = {MuscleGroupScreen} options={{ title: 'Muscle Groups'}} />
                    <RootStack.Screen name="Abdominals" component={Abdominals}/>
                    <RootStack.Screen name="Back" component={Back} />
                    <RootStack.Screen name="Biceps" component={Biceps} />
                    <RootStack.Screen name="Forearms" component={Forearms} />
                    <RootStack.Screen name="Glutes" component={Glutes} />
                    <RootStack.Screen name="Shoulders" component={Shoulders} />
                </RootStack.Navigator>
        );
    }
}