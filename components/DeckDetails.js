import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { lightPurp, white, black } from '../utils/colors';

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  render(){
    const title = this.props.navigation.state.params.title;
    const length = this.props.navigation.state.params.length;

    return(
      <View style={{flex:1, justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.bodyText}>{length} cards</Text>
        </View>
        <View>
          <TextButton 
            style={styles.container}
            onPress={() => this.props.navigation.navigate(
              'NewCard',
              { title: title}
            )}>
              Add Card
          </TextButton>
          <TextButton 
            style={styles.container}
            onPress={() => this.props.navigation.navigate(
              'Quiz',
              { title: title }
            )}
          >
              Start Quiz
          </TextButton>
        </View>
      </View>
    )
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
    fontWeight: 'bold',
    fontSize: 20,
    color: white,
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
    color: white,
    paddingTop: 20,
    paddingBottom: 20,
  },
  bodyText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: black,
    textAlign: 'center',
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
)

export default connect(mapStateToProps)(DeckDetails);