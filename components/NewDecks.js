import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import TextButton from './TextButton';
import { saveDeckTitle } from '../actions';

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
        'Decks'
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
      <View>
        <Text style={styles.titleText}>
          New Deck Title
        </Text>
        <TextInput
          placeholder="Deck Title"
          value={this.state.title}
          onChangeText={(title) => this.setState({title})}
          onSubmitEditing={Keyboard.dismiss}
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