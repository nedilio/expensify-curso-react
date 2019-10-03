import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('filter by test value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1]]);
});

test('filter by start date', () => {
  const filters=  {
    text: '',
    sortBy: 'date',
    startDate: moment(0).subtract(1,'days'),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0]]);
});

test('filter by end date', () => {
  const filters=  {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2,'days')
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('sort by date', () => {
  const filters=  {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1]]);
});

test('sort by amount', () => {
  const filters=  {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1], expenses[0]]);
});