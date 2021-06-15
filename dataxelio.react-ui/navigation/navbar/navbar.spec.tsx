import React from 'react';
import { render } from '@testing-library/react';
import { BasicNavbar } from './navbar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicNavbar />);
  const rendered = getByText('hello from Navbar');
  expect(rendered).toBeTruthy();
});
