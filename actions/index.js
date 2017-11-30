export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export function receive_decks(decks){
  return{
    type: RECEIVE_DECKS,
    decks,
  }
}

export function receive_cards(cards){
  return{
    type: RECEIVE_CARDS,
    cards,
  }
}