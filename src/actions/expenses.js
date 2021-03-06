// EXPENSES ACTIONS
import uuid from 'uuid';
import database from '../firebase/firebase';

//
// ADD_EXPENSE
export const addExpense = (expense) => ({
  type:'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = {
      description, note, amount, createdAt
    }
    return database.ref('expenses').push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
  };
};

export const startRemoveExpense = ({id} = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove()
    .then((ref) => {
      dispatch(removeExpense({id}));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ( {id} = {} ) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses')
    .once('value')
    .then((snapshot) => {
      // console.log(snapshot.val());
      const expenses = [];
      
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id:childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));
    })
    .catch((error) => {
      console.log('Error fetching:', error)
    });
  };
};