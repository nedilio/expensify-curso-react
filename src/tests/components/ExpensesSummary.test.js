import React from 'react'
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test ('render expeneses summary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={50000}/>);
  expect(wrapper).toMatchSnapshot();
});

test ('render expeneses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={55} expensesTotal={8234857328945}/>);
  expect(wrapper).toMatchSnapshot();
});