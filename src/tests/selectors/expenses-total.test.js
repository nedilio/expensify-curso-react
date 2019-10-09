import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test(' return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});
test(' add 1 expense', () => {
  console.log([expenses[0]]);
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(500);
});
test(' multiple expenses total', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(355000+277000+500);
});