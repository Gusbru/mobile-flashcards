import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TextInput, Keyboard } from 'react-native';
import TextButton from './TextButton';
import { connect } from 'react-redux';
import { lightPurp, white, black, red } from '../utils/colors';
import { saveNewCard } from '../actions';

class NewCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  insertNewCard = () => {
    const card = this.state;
    this.props.newCard(this.props.navigation.state.params.title, card);
    this.setState(
      {
        question: '',
        answer: ''
      }
    ); 
  }

  render(){
    return(
      <View style={{flex:1, justifyContent: 'space-between'}}>
        <Text 
          style={styles.titleText}
        >
          New Card to {this.props.navigation.state.params.title} Deck
        </Text>

        <Text
          style={styles.normalText}
        >
          Question
        </Text>
        <TextInput
          style={styles.deckTitleText}
          placeholder="Question"
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
          onSubmitEditing={Keyboard.dismiss}
        />

        <Text
          style={styles.normalText}
        >
          Answer
        </Text>
        <TextInput
          style={styles.deckTitleText}
          placeholder="Answer"
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
          onSubmitEditing={Keyboard.dismiss}
        />

        <TextButton
          style={[styles.container, styles.buttonText]} 
          onPress={() => this.insertNewCard()}
        >
          Submit
        </TextButton>

      </View>
    )
  }
}

const mapStateToProps = (actions) => (
  {

  }
);

const mapDispatchToProps = (dispatch) => (
  {
    newCard: (title, cardDetails) => dispatch(saveNewCard(title, cardDetails)),
  }
);

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
  deckTitleText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: black,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 20,
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: white,
    paddingTop: 20,
    paddingBottom: 20,
    padding: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  normalText: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'left',
    paddingTop: 30,
    marginLeft: 20,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);