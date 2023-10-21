import React from 'react';
import { render } from '@testing-library/react';
import Details from '../components/Details';

test('Details component renders correctly', () => {
  const { container } = render(<Details />);
  expect(container).toMatchSnapshot();
});
