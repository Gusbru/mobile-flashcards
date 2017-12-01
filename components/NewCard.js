import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NewCard extends Component {

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  render(){
    return(
      <View>
        <Text style={styles.titleText}>New Card to {this.props.navigation.state.params.title} Deck</Text>
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

export default NewCard;