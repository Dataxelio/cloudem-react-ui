import React from 'react';
import { render } from '@testing-library/react';
import { BasicAutoSuggestInput } from './auto-suggest-input.composition';

describe('auto-suggest-input', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicAutoSuggestInput />);
    const rendered = getByText('hello from AutoSuggestInput');
    expect(rendered).toBeTruthy();
  });

})