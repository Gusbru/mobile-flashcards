import { fetchAllDecks } from '../utils/api';

export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export const getDecks = () => async(dispatch) => {
  fetchAllDecks()
  .then(data => dispatch(addDecks(data)))
}

const addDecks = (decks) => (
  {
    type: RECEIVE_ALL_DECKS,
    decks: decks,
  }
)

const addNewDeck = (item) => {
  
}


export function receive_cards(cards){
  return{
    type: RECEIVE_CARDS,
    cards,
  }
}