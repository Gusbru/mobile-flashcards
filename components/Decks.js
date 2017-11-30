import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, FlatList } from 'react-native';
import TextButton from './TextButton';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { AppLoading } from 'expo';
import { white, lightPurp } from '../utils/colors';

const QueryAllDecks = gql`query allDecks {
  allDecks {
    id
    title
    numQuestions
  }
}`


CurrentDeck = ({ title, length }) => {
  return(
    <View>
      <TextButton style={styles.container}>
          <Text style={styles.titleDeckText}>
            {title}{'\n'}
          </Text>
          <Text style={styles.bodyDeckText}>
            Number of cards: {length}
          </Text>
      </TextButton>
    </View>
  )
}

class Decks extends Component {

  state = {
    decks: []
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.QueryAllDecks.loading && !nextProps.QueryAllDecks.error) {
      this.setState({
        decks: nextProps.QueryAllDecks.allDecks
      })
    }
  }

  renderItem = ({ item }) => {
    return <CurrentDeck {...item}/>
  }
  render(){
    data = this.state.decks.map(item => (
      {
        "key"   : item.id,
        "title" : item.title, 
        "length": item.numQuestions
      }
    ));

    if (this.props.QueryAllDecks.loading) {
      return <AppLoading />
    }

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
    backgroundColor: lightPurp,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
  bodyDeckText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  }
})

export default graphql(
  QueryAllDecks, {name: 'QueryAllDecks'}
)(Decks);