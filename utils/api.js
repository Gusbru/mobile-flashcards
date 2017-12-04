import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'flashcards:data';

export function fetchAllDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
  .then(initialData)
}

export function addNewDeck(title) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: "",
  }))
}

initialData = (data) => {
  data === null
  && AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(
      {
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
    )
  )
  
  return AsyncStorage.getItem(STORAGE_KEY)
  .then(out => JSON.parse(out))
}