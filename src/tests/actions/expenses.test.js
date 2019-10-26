import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach(() => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description,note,amount,createdAt}
  });
  database.ref('expenses').set(expensesData).then(() => done());
});

test('remove expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({id}))
  .then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  })
});

test('setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('setup edit action object', () => {
  const action = editExpense('123abc', {note: 'New note value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('add expense to database and store', (done) => {

  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 5000,
    note: 'nota',
    createdAt: 1000
  }
  const defaultExpense = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id:expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done();
  });
  
});

test('add expense with defaults to database and store', () => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 5000,
    note: 'nota',
    createdAt: 1000
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    // console.log(actions[0]);
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id:expect.any(String),
        ...defaultExpense
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpense);
    done();
  });
});
// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense:  {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//     }
//   });
// });

test('setup expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});

test('should fetch the expenses from firebase', () => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'SET_EXPENSES',
      expenses
    });
    done();
  })
  .catch( console.log('error fetching data'));
});