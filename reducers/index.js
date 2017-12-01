import { combineReducers } from 'redux';
import { 
  RECEIVE_CARDS, 
  RECEIVE_ALL_DECKS 
} from '../actions';


function decks(state = {}, action) {
  const currentDeck = action.deck;

  switch(action.type) {
    case RECEIVE_ALL_DECKS:
      return {
        ...state,
        ...action.decks
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