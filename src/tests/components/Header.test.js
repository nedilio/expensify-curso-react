import React from 'react';
import Header from '../../components/Header';
import reactShallowRenderer from 'react-test-renderer/shallow';

test('render header', () => {
  const renderer = new reactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
})