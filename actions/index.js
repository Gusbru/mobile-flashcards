import {
  fetchAllDecks,
  addNewDeck,
  addNewCard,
 } from '../utils/api';

export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS';
export const NEW_DECK_TITLE = 'NEW_DECK_TITLE';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const NEW_CARD = 'NEW_CARD';
export const NEW_CARD_NEW_DECK = 'NEW_CARD_NEW_DECK';

export const getDecks = () => async(dispatch) => {
  try {
    fetchAllDecks()
    .then(data => dispatch(insertDecks(data)))
  } catch(error) {

  }
}

export const saveDeckTitle = (title) => async(dispatch) => {
  addNewDeck(title);
  dispatch(newDeckTitle(title));
}

export const saveNewCard = (deckTitle, cardDetails, newDeck) => async(dispatch) => {
  addNewCard(deckTitle, cardDetails);
  dispatch(newCard(deckTitle, cardDetails, newDeck));
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

const newCard = (deckTitle, cardDetails, newDeck) => {
  if (newDeck === false) {
    return {
      type: NEW_CARD,
      decks: deckTitle,
      cardQuestion: cardDetails,
    }
  }
  if (newDeck === true) {
    return {
      type: NEW_CARD_NEW_DECK,
      decks: deckTitle,
      cardQuestion: cardDetails,
    }
  }
  
}


export function receive_cards(cards){
  return{
    type: RECEIVE_CARDS,
    cards,
  }
}