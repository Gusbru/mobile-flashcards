import { combineReducers } from 'redux';
import { 
  RECEIVE_CARDS, 
  RECEIVE_ALL_DECKS ,
  NEW_DECK_TITLE,
  NEW_CARD,
  NEW_CARD_NEW_DECK,
} from '../actions';



function decks(state = {}, action) {

  const currentDeckTitle = action.decks;

  switch(action.type) {
    case RECEIVE_ALL_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case NEW_DECK_TITLE:
      return {
        ...state,
        currentDeckTitle: {
          title: currentDeckTitle,
          questions: [],
        } 
      }
    case NEW_CARD:
      return{
        ...state,
        [currentDeckTitle]: {
          title: currentDeckTitle,
          questions: [
            ...state[currentDeckTitle].questions,
            action.cardQuestion
          ],
        },
      }
    case NEW_CARD_NEW_DECK:
      return{
        ...state,
        [currentDeckTitle]: {
          title: currentDeckTitle,
          questions: [
            action.cardQuestion
          ],
        },
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