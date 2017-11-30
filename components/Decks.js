import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, FlatList } from 'react-native';
import TextButton from './TextButton';
import { white } from '../utils/colors';

// TODO: Read this from AsyncStorage
const db = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};


CurrentDeck = ({ title, length }) => {
  return(
    <View>
      <TextButton style={styles.container}>
        <Text>
          <Text style={styles.titleDeckText}>
            {title}{'\n'}
          </Text>
          <Text>
            Number of cards: {length}
          </Text>
        </Text>
      </TextButton>
    </View>
  )
}

class Decks extends Component {
  renderItem = ({ item }) => {
    return <CurrentDeck {...item}/>
  }
  render(){
    data = Object.keys(db).map(key => (
      {
        "key"   : key,
        "title" : db[key].title, 
        "length": db[key].questions.length
      }
    ));

    return(
      <View style={{flex:1}}>
        <Text style={styles.titleText}>
          Choose one Deck
        </Text>
        <FlatList
          data={data}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    marginBottom: 17,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  titleDeckText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  }
})

export default Decks;