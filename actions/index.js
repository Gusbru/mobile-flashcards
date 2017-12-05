import {
  fetchAllDecks,
  addNewDeck,
  addNewCard,
 } from '../utils/api';

export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS';
export const NEW_DECK_TITLE = 'NEW_DECK_TITLE';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const NEW_CARD = 'NEW_CARD';

export const getDecks = () => async(dispatch) => {
  fetchAllDecks()
  .then(data => dispatch(insertDecks(data)))
}

export const saveDeckTitle = (title) => async(dispatch) => {
  addNewDeck(title);
  dispatch(newDeckTitle(title));
}

export const saveNewCard = (deckTitle, cardDetails) => async(dispatch) => {
  addNewCard(deckTitle, cardDetails);
  dispatch(newCard(deckTitle, cardDetails));
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
    decks: title
  }
)

const newCard = (deckTitle, cardDetails) => (
  {
    type: NEW_CARD,
    decks: deckTitle,
    cardQuestion: cardDetails,
  }
)


export function receive_cards(cards){
  return{
    type: RECEIVE_CARDS,
    cards,
  }
}