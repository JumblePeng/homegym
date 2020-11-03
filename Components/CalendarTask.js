import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { CalendarList, Calendar } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default class CalendarTask extends Component {
    render(){
        return(
        <View style={styles.container}>
            <TouchableOpacity
                    onPress={()=>this.props.navigation.goBack()}
                >
                    <Ionicons
                        name="ios-arrow-round-back"
                        size = {70}
                    />
            </TouchableOpacity>

            <Text style={styles.titleSection}> Calendar </Text>

            <CalendarList
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={1}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={6}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}

            minDate={new Date()}

            onDayPress={day => {
                console.log('selected day', day);
            }}
            />

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    titleSection:{
        fontSize: 30,
    }
})