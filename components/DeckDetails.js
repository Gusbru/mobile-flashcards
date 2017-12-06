import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Alert } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { styles } from '../utils/styles';

class DeckDetails extends Component {

  state = {
    title: '',
    newDeck: ''
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  componentWillMount() {
    this.setState({
      title: this.props.navigation.state.params.title,
      newDeck: this.props.navigation.state.params.newDeck === true ? true : false,
    })
  }

  render(){
    const title = this.props.navigation.state.params.title;
    let length;
    if (this.props.navigation.state.params.newDeck === true) {
      length = 0;
    } else {
      length = this.props.decksList[title].questions.length;
    }

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
              { 
                title: title,
                newDeck: this.state.newDeck
              }
            )}>
              Add Card
          </TextButton>
          <TextButton 
            style={styles.container}
            onPress={length !== 0 
              ? 
                () => this.props.navigation.navigate(
                  'Quiz',
                { title: title }
                )
              :
                () => Alert.alert(
                  'Hey!!',
                  'Please, add questions first!',
                  [
                    {text: 'OK', onPress: () => console.log('Ask me later pressed')}
                  ],
                  { cancelable: false }
                )
            }
          >
              Start Quiz
          </TextButton>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (actions) => (
  {
    decksList: actions.decks,
  }
)

export default connect(mapStateToProps)(DeckDetails);