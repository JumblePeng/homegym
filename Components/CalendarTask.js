import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        '2020-12-02': [{name: 'Abs'}],
        '2020-12-03': [{name: 'Shoulders'}],
        '2020-12-04': [{name: 'Glutes'}],
        '2020-12-06': [{name: 'Back'}],
        '2020-12-07': [{name: 'Biceps'}],
        '2020-12-09': [{name: 'Chest'}],
        '2020-12-10': [{name: 'Abs'}],
        '2020-12-11': [{name: 'Shoulders'}],
        '2020-12-12': [{name: 'Glutes'}],
        '2020-12-14': [{name: 'Back'}],
        '2020-12-15': [{name: 'Biceps'}],
        '2020-12-17': [{name: 'Chest'}],
        '2020-12-18': [{name: 'Abs'}],
        '2020-12-19': [{name: 'Shoulders'}],
        '2020-12-20': [{name: 'Glutes'}],
        '2020-12-22': [{name: 'Back'}],
        '2020-12-23': [{name: 'Biceps'}],
        '2020-12-27': [{name: 'Abs'}],
        '2020-12-28': [{name: 'Glutes'}],
        '2020-12-29': [{name: 'Chest'}],
        '2021-01-03': [{name: 'Abs'}],
        '2021-01-03': [{name: 'Shoulders'}],
        '2021-01-04': [{name: 'Glutes'}],
        '2021-01-06': [{name: 'Back'}],
        '2021-01-07': [{name: 'Biceps'}],
        '2021-01-09': [{name: 'Chest'}],
      }
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2020-12-02'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is an off day!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});