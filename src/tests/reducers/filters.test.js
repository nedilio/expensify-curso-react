import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('setup defaul filter values', () => {
  const state = filtersReducers(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('set sortby to amount', () => {
  const state = filtersReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('set sortby to amount', () => {
  const state = filtersReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('set sortby to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const action = {type: 'SORT_BY_DATE'}
  const state = filtersReducers(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('set text filter', () => {
  const text = 'filter text';
  const action = {type: 'SET_TEXT_FILTER', text}
  const state = filtersReducers(undefined, action);
  expect(state.text).toBe(text);
});

test('set startDate filter', () => {
  const startDate = moment();
  const action = {type: 'SET_START_DATE', startDate};
  const state = filtersReducers(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('set endDate filter', () => {
  const endDate = moment();
  const action = {type: 'SET_END_DATE', endDate};
  const state = filtersReducers(undefined, action);
  expect(state.endDate).toEqual(endDate);
});