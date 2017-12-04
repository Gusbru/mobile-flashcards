import { combineReducers } from 'redux';
import { 
  RECEIVE_CARDS, 
  RECEIVE_ALL_DECKS ,
  NEW_DECK_TITLE
} from '../actions';


function decks(state = {}, action) {
  const currentDeck = action.deck;

  switch(action.type) {
    case RECEIVE_ALL_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case NEW_DECK_TITLE:
      return {
        ...state,
        deckTitle: ''
      }
    default:
      return state;
  }
}

export default combineReducers(
  {
    decks,
  }
);