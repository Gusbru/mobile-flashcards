import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NewDecks extends Component {
  render(){
    return(
      <View>
        <Text style={styles.titleText}>New Deck</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  }
})

export default NewDecks;