export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

// Get all decks from the server
const allDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export const getDecks = () => async(dispatch) => {
  // no lugar de allDecks vai entrar o "get" do firebase
  decks = allDecks
  dispatch(addDecks(decks));
  
}

const addDecks = (decks) => (
  {
    type: RECEIVE_ALL_DECKS,
    decks: decks,
  }
)

const addDeck = (item) => {
  
}


export function receive_cards(cards){
  return{
    type: RECEIVE_CARDS,
    cards,
  }
}