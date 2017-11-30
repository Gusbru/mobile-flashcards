import { RECEIVE_CARDS, RECEIVE_DECKS } from '../actions'

function entries(state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case RECEIVE_CARDS:
      return {
        ...state,
        ...action.cards,
      }
    default:
      return state;
  }
}

export default entries