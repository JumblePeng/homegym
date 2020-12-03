import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        '2020-12-02': [{name: 'Abdominals'}],
        '2020-12-03': [{name: 'Shoulders'}],
        '2020-12-04': [{name: 'Glutes'}],
        '2020-12-06': [{name: 'Back'}],
        '2020-12-07': [{name: 'Arms'}],
        '2020-12-09': [{name: 'Chests'}],
        '2020-12-10': [{name: 'Abdominals'}],
        '2020-12-11': [{name: 'Shoulders'}],
        '2020-12-12': [{name: 'Glutes'}],
        '2020-12-14': [{name: 'Back'}],
        '2020-12-15': [{name: 'Arms'}],
        '2020-12-17': [{name: 'Chests'}],
        '2020-12-18': [{name: 'Abdominals'}],
        '2020-12-19': [{name: 'Shoulders'}],
        '2020-12-20': [{name: 'Glutes'}],
        '2020-12-22': [{name: 'Back'}],
        '2020-12-23': [{name: 'Arms'}],
        '2020-12-27': [{name: 'Abdominals'}],
        '2020-12-28': [{name: 'Glutes'}],
        '2020-12-29': [{name: 'Chests'}],
        '2021-01-03': [{name: 'Abdominals'}],
        '2021-01-03': [{name: 'Shoulders'}],
        '2021-01-04': [{name: 'Glutes'}],
        '2021-01-06': [{name: 'Back'}],
        '2021-01-07': [{name: 'Arms'}],
        '2021-01-09': [{name: 'Chests'}],
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
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(item.name)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>

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
