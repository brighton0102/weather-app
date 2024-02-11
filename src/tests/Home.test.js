import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

test('Home component renders correctly', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
