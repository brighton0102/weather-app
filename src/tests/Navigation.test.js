import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('Navigation component renders correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});
