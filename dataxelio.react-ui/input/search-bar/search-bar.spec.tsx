import React from 'react';
import { render } from '@testing-library/react';
import { BasicSearchBar } from './search-bar.composition';

describe('search-bar', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicSearchBar />);
    const rendered = getByText('hello from SearchBar');
    expect(rendered).toBeTruthy();
  });

})