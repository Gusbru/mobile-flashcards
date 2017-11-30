import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar, Platform } from 'react-native';
import Decks from './components/Decks';
import NewDecks from './components/NewDecks';
import { Constants } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { black, white, purple } from './utils/colors';
import { Ionicons } from '@expo/vector-icons'

function MainStatusBar({ backgroundColor, ...props}) {
  return(
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'} size={30} color={tintColor}/>
    }
  },
  NewDecks: {
    screen: NewDecks,
    navigationOptions: {
      tabBarLabel: 'New Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'} size={30} color={tintColor}/>
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MainStatusBar backgroundColor={black} barStyle='light-content'/>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
