import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';


// ADD_EXPENSE action generator functions
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    database.ref('expenses').push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.id,
          ...expense
        }))
      });
  };
};

// REMOVE_EXPANSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

