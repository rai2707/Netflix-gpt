import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Body from '../components/Body';

test('renders Login component initially', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Body />
    </MemoryRouter>
  );

  // Assert that the Login component is initially rendered.
  const loginElement = screen.getByText('Login'); // You may need to adjust this depending on the actual content in your Login component
  expect(loginElement).toBeInTheDocument();
});

test('renders Browse component when the route is changed', () => {
  render(
    <MemoryRouter initialEntries={['/browse']}>
      <Body />
    </MemoryRouter>
  );

  // Assert that the Browse component is rendered when the route changes to '/browse'.
  const browseElement = screen.getByText('Browse'); // You may need to adjust this depending on the actual content in your Browse component
  expect(browseElement).toBeInTheDocument();
});
