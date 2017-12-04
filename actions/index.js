import {
  fetchAllDecks,
  addNewDeck,
 } from '../utils/api';

export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS';
export const NEW_DECK_TITLE = 'NEW_DECK_TITLE';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export const getDecks = () => async(dispatch) => {
  fetchAllDecks()
  .then(data => dispatch(insertDecks(data)))
}

// export const saveDeckTitle = (title) => async(dispatch) => {
//   console.log('action', title)
//   addNewDeck(title)
//   .then(title => dispatch(newDeckTitle(title)))
// }

export const saveDeckTitle = (title) => async(dispatch) => {
  console.log(title)
}

const insertDecks = (decks) => (
  {
    type: RECEIVE_ALL_DECKS,
    decks: decks,
  }
)

const newDeckTitle = (title) => (
  {
    type: NEW_DECK_TITLE,
    deckTitle: title
  }
)


export function receive_cards(cards){
  return{
    type: RECEIVE_CARDS,
    cards,
  }
}