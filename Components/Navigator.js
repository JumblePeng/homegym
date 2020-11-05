import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import MuscleGroupScreen from './MuscleGroupScreen'
import Abdominals from './MuscleGroups/Abdominals/Abdominals'
import Back from './MuscleGroups/Backs/Backs'
import Biceps from './MuscleGroups/Biceps/Biceps'
import Forearms from './MuscleGroups/Forearms/Forearms'
import Glutes from './MuscleGroups/Glutes/Glutes'
import Shoulders from './MuscleGroups/Shoulders/Shoulders'

import Ab1 from './MuscleGroups/Abdominals/Ab1'
import Ab2 from './MuscleGroups/Abdominals/Ab2'
import Ab3 from './MuscleGroups/Abdominals/Ab3'

import Back1 from './MuscleGroups/Backs/Back1'
import Back2 from './MuscleGroups/Backs/Back2'
import Back3 from './MuscleGroups/Backs/Back3'

import Bicep1 from './MuscleGroups/Biceps/Bicep1'
import Bicep2 from './MuscleGroups/Biceps/Bicep2'
import Bicep3 from './MuscleGroups/Biceps/Bicep3'

import Forearm1 from './MuscleGroups/Forearms/Forearm1'
import Forearm2 from './MuscleGroups/Forearms/Forearm2'

import Glute1 from './MuscleGroups/Glutes/Glute1'
import Glute2 from './MuscleGroups/Glutes/Glute2'
import Glute3 from './MuscleGroups/Glutes/Glute3'

import Shoulder1 from './MuscleGroups/Shoulders/Shoulder1'
import Shoulder2 from './MuscleGroups/Shoulders/Shoulder2'
import Shoulder3 from './MuscleGroups/Shoulders/Shoulder3'

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

                    <RootStack.Screen name="Ab1" component={Ab1} />
                    <RootStack.Screen name="Ab2" component={Ab2} />
                    <RootStack.Screen name="Ab3" component={Ab3} />

                    <RootStack.Screen name="Back1" component={Back1} />
                    <RootStack.Screen name="Back2" component={Back2} />
                    <RootStack.Screen name="Back3" component={Back3} />

                    <RootStack.Screen name="Bicep1" component={Bicep1} />
                    <RootStack.Screen name="Bicep2" component={Bicep2} />
                    <RootStack.Screen name="Bicep3" component={Bicep3} />

                    <RootStack.Screen name="Forearm1" component={Forearm1} />
                    <RootStack.Screen name="Forearm2" component={Forearm2} />
                    
                    <RootStack.Screen name="Glute1" component={Glute1} />
                    <RootStack.Screen name="Glute2" component={Glute2} />
                    <RootStack.Screen name="Glute3" component={Glute3} />

                    <RootStack.Screen name="Shoulder1" component={Shoulder1} />
                    <RootStack.Screen name="Shoulder2" component={Shoulder2} />
                    <RootStack.Screen name="Shoulder3" component={Shoulder3} />
                </RootStack.Navigator>
        );
    }
}