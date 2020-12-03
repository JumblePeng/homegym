import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, TouchableOpacity, Text, FlatList, Alert} from 'react-native';
import Constants from 'expo-constants';
import {SearchBar} from 'react-native-elements';

const data=[
  {key:"1",title:"Plank"},
  {key:"2",title:"Crunches"},
  {key:"3",title:"Mountain Climbers"},
  {key:"4",title:"Dead Bug"},
  {key:"5",title:"Russian Twists"},
  {key:"6",title:"Side Plank"},

  {key:"7",title:"Chin-Up"},
  {key:"8",title:"L-Sit Pull Up"},
  {key:"9",title:"Wide Pull Ups"},
  {key:"10",title:"Farmer's Carry"},
  {key:"11",title:"Wrist Flexion"},

  {key:"12",title:"Pull Up"},
  {key:"13",title:"Reverse Snow Angels"},
  {key:"14",title:"Dolphin Kicks"},
  {key:"15",title:"Superman Hold"},
  {key:"16",title:"Pulse Rows"},
  {key:"17",title:"Reverse Plank"},

  {key:"18",title:"Push-Ups"},
  {key:"19",title:"Wide Grip Push-Up"},
  {key:"20",title:"Altnerating Shuffle Push-Up"},
  {key:"21",title:"Diamond Push-Up"},
  {key:"22",title:"Incline Push-Up"},
  {key:"23",title:"Chest Press"},

  {key:"24",title:"Glute Bridge"},
  {key:"25",title:"Single Leg Step Up"},
  {key:"26",title:"Squat"},
  {key:"27",title:"Donkey Kick"},
  {key:"28",title:"Clamshell"},
  {key:"29",title:"Side Lying Leg Lift"},

  {key:"30",title:"Squat Jump"},
  {key:"31",title:"Side Lunge"},
  {key:"32",title:"Single Leg Hip Raises"},
  {key:"33",title:"Altnerating Drop Lunge"},
  {key:"34",title:"Bulgarian Split Squat Jumps"},
  {key:"35",title:"Bulgarian Split Squat"},

  {key:"36",title:"Shoulder Press"},
  {key:"37",title:"Lateral Raise"},
  {key:"38",title:"Medium Grip Pull-Up"},
  {key:"39",title:"Kindu Pushup"},
  {key:"40",title:"Front Raise"},
  {key:"41",title:"Standing Shrugs"},

  
];
class HomeSearchBar extends Component {
    constructor(){
        super()
        this.state={
            data:data,
            search:""
        }
    }
  showItem=(data)=>{
    Alert.alert(data);
  }

    renderHeader=()=>{
      const { search } = this.state;
        return(
            <SearchBar
            placeholder="Search Here"
            lightTheme   
            onChangeText={text=>this.searchAction(text)}
            autoCorrect={false}
            value={search}
            />
        )
    }
    searchAction=(text)=>{
        const newData=data.filter(item=>{
            const itemData=`${item.title.toUpperCase()}`;
            const textData=text.toUpperCase();
            return itemData.indexOf(textData) > -1;

        });
        this.setState({
            data:newData,
            search:text
        });
    }
  

    renderItem=(item)=>{
      return(
      <View key={item.key} style={styles.item}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate(item.title)}>
              <Text style={{fontFamily: 'OpenSans-Reg'}}>{item.title}</Text>
          </TouchableOpacity>
      </View>

      )
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                data={this.state.data}
                renderItem={({item})=>this.renderItem(item)}
                keyExtractor={item=>item.key}
                ListHeaderComponent={this.renderHeader}
                >
                </FlatList>
            </SafeAreaView>         
            
        )
    }
}
export default HomeSearchBar;

const styles =StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        padding:10
      },
      item:{
        padding:10,
        borderWidth:1,
        borderRadius:5,
        borderColor:"#c1dec5", 
        marginBottom:10},
})