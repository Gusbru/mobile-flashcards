import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Alert } from 'react-native';
import { connect } from 'react-redux';
import TextButton from './TextButton';
import { black, white, lightPurp, red } from '../utils/colors'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: `${title} Quiz`
    }
  }

  state = {
    title: '',
    currentQuestion: '',
    currentAnswer: '',
    questionNumber: 0,
    numberOfQuestions: 0,
    score: 0
  }

  componentDidMount() {
    const title = this.props.navigation.state.params.title;
    const questions = this.props.decksList[title].questions;

    this.setState({
      title: this.props.navigation.state.params.title,
      currentQuestion: questions[0].question,
      questionNumber: 1,
      numberOfQuestions: questions.length,
      questions: questions,
      quizFinished: false,
    })
  }

  updateQuestion = () => {
    const newQuestionNumber = this.state.questionNumber + 1;
    if (newQuestionNumber-1 < this.state.numberOfQuestions) {
      console.log(this.state.questionNumber)
      this.setState({
        currentAnswer: '',
        currentQuestion: this.state.questions[newQuestionNumber-1].question,
        questionNumber: newQuestionNumber,
      });
    } else {
      this.setState({
        quizFinished: true
      })
    }
    
  }

  updateScore = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    })
  }

  showAnswer = () => {
    if (this.state.currentAnswer === '')
      this.setState({
        currentAnswer: this.state.questions[this.state.questionNumber-1].answer,
      })
  }

  nextQuestion = (isCorrect) => {
    if (this.state.currentAnswer === '') {
      Alert.alert(
        'Hey!!',
        'Please, see answer first!',
        [
          {text: 'OK', onPress: () => console.log('Ask me later pressed')}
        ],
        { cancelable: false }
      );
      return console.log('please, see answer first');
    }

    if (isCorrect) {
      this.updateScore();
    }
    this.updateQuestion();    
  }

  render() {
    return(
      <View>
        <View style={styles.header}>
          <Text style={{fontSize: 20, alignItems: 'flex-start'}}>{this.state.title} Quiz</Text>
          <Text style={{fontSize: 20, alignItems: 'flex-end'}}>Score: {this.state.score}</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Question {this.state.questionNumber} of {this.state.numberOfQuestions}</Text>
        </View>
        {!this.state.quizFinished 
        ? 
          <View>
            <Text style={styles.questionText}>{this.state.currentQuestion}</Text>
            <TextButton style={[styles.container, styles.buttonText]} onPress={() => this.showAnswer()}>Answer</TextButton>
            <Text style={styles.questionText}>{this.state.currentAnswer}</Text>
            <TextButton style={[styles.container, styles.buttonText]} onPress={() => this.nextQuestion(true)}>Correct</TextButton>
            <TextButton style={[styles.container, styles.buttonText]} onPress={() => this.nextQuestion(false)}>Incorrect</TextButton>
          </View>
        :
          <View>
            <Text style={styles.quizFinishedText}>Quiz Finished!</Text>
          </View>
        }
      </View>
    )
  }
}

const mapStateToProps = (actions) => (
  {
    decksList: actions.decks,
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
  questionText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: black,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: white,
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  quizFinishedText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: red,
    paddingTop: 30,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

export default connect(mapStateToProps)(Quiz);