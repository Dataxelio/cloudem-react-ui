import React from 'react';
import { render } from '@testing-library/react';
import { BasicNavbarGroup } from './navbar-group.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicNavbarGroup />);
  const rendered = getByText('hello from NavbarGroup');
  expect(rendered).toBeTruthy();
});
