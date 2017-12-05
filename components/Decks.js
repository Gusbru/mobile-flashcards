import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, FlatList } from 'react-native';
import TextButton from './TextButton';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { white, lightPurp } from '../utils/colors';
import { getDecks } from '../actions'

class Decks extends Component {

  state = {
    decks: []
  }

  componentWillMount() {
    this.props.getDecks();
  }

  componentWillReceiveProps() {
    //console.log('willReceiveProps',this.props.decksList)
  }

  renderItem = ({ item }) => (
    <View>
      <TextButton 
        style={styles.container} 
        onPress={() => this.props.navigation.navigate(
          'DeckDetails',
          { title: item.title, length: item.length }
        )}>
            <Text style={styles.titleDeckText}>
              {item.title}{'\n'}
            </Text>
            <Text style={styles.bodyDeckText}>
              Number of cards: {item.length}
            </Text>
      </TextButton>
    </View>
  )

  render(){
    db = this.props.decksList;
    //console.log('decks', db)
    data = Object.keys(db).map(key => (
      {
        'key': key,
        'title': db[key].title,
        'length': db[key].questions.length
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

const mapStateToProps = (actions) => (
  {
    decksList: actions.decks,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getDecks: () => dispatch(getDecks()),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Decks);