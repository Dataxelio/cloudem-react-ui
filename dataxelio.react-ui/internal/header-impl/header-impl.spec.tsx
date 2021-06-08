import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeaderImpl } from './header-impl.composition';

describe('header-impl', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicHeaderImpl />);
    const rendered = getByText('hello from HeaderImpl');
    expect(rendered).toBeTruthy();
  });

})