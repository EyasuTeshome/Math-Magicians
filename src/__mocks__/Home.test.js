import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home/Home';

test('should render the home page', () => {
  const tree = render(<Router><Home /></Router>);
  expect(tree).toMatchSnapshot();
});
