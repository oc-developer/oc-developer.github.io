import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Protagonist from './Protagonist';

test('renders protagonist name', () => {
  const { getByText } = render(<Protagonist />);
  const nameElement = getByText(/Oliver Carlsson/i);
  expect(nameElement).toBeInTheDocument();
});
