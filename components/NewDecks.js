import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import TextButton from './TextButton';
import { saveDeckTitle } from '../actions';

class NewDecks extends Component {
  state = {
    title: ''
  }

  updateTitle = () => {
    saveDeckTitle(this.state.title);
    this.setState({
      title: ''
    });
  }

  render(){
    return(
      <View>
        <Text style={styles.titleText}>
          New Deck Title
        </Text>
        <TextInput
          placeholder="Deck Title"
          value={this.state.title}
          onChangeText={(title) => this.setState({title})}
        />
        <TextButton
        onPress={() => this.updateTitle()}>
          Submit
        </TextButton>
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