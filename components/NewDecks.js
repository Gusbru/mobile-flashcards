import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, Alert, Keyboard, Platform } from 'react-native';
import TextButton from './TextButton';
import { saveDeckTitle } from '../actions';
import { styles } from '../utils/styles';

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

export default connect(mapStateToProps, mapDispatchToProps)(NewDecks);