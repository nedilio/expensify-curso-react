import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state). toEqual([expenses[0],expenses[2]]);
});

test('not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state). toEqual(expenses);
});

test('add expense', () => {
  const expense = {
    id: '4',
    description: 'new item',
    note: '',
    amount: 200,
    createdAt: moment()
  };
  const action = {type: 'ADD_EXPENSE', expense};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses,expense]);
});

test('edit expense', () => {
  const amount = 500
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('not edit expense if id not found', () => {
  const amount = 500
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});