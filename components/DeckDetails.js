import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Alert } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { styles } from '../utils/styles';

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  render(){
    const title = this.props.navigation.state.params.title;
    const length = this.props.decksList[title].questions.length;

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