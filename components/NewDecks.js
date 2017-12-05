import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, Alert, Keyboard, Platform } from 'react-native';
import TextButton from './TextButton';
import { saveDeckTitle } from '../actions';
import { lightPurp, white, black, red } from '../utils/colors';

class NewDecks extends Component {
  state = {
    title: ''
  }

  updateTitle = () => {
    if(this.state.title !== ''){
      this.props.newDeckTitle(this.state.title)
      this.setState({
        title: ''
      });
      this.props.navigation.navigate(
        'DeckDetails',
        {title: this.state.title}
      );
    } else {
      Alert.alert(
        'Hey!!',
        'Please, fill the title name!',
        [
          {text: 'OK', onPress: () => console.log('Ask me later pressed')}
        ],
        { cancelable: false }
      );
      console.log('Please, fill the title name');
    }
  }

  render(){
    return(
      <View style={{flex:1, justifyContent: 'space-between'}}>
        <Text style={styles.titleText}>
          New Deck Title
        </Text>
        <TextInput
          style={styles.deckTitleText}
          placeholder="Deck Title"
          value={this.state.title}
          onChangeText={(title) => this.setState({title})}
          onSubmitEditing={Keyboard.dismiss}
        />
        <TextButton
          style={[styles.container, styles.buttonText]} 
          onPress={() => this.updateTitle()}
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
)

const mapDispatchToProps = (dispatch) => (
  {
    newDeckTitle: (title) => dispatch(saveDeckTitle(title)),
  }
)

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
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDecks);