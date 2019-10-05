import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'cl', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },
  abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
  },
  currency: {
      symbol: '$'
  }
});

// switch between locales
numeral.locale('cl');

const ExpenseListItem = ({ description, amount, createdAt, id}) => (
  <div>
    <Link to={`/edit/${id}`}>
    <h3>{description}</h3></Link>
    <p>{numeral(amount).format('$ 0.0[,]00')}
    - 
    {moment(createdAt).format('D MMMM, YYYY')}</p>
  </div>
);

export default ExpenseListItem;