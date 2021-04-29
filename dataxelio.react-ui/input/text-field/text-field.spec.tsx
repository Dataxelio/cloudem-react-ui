import React from 'react';
import { render } from '@testing-library/react';
import { BasicTextField } from './text-field.composition';

describe('text-field', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicTextField />);
    const rendered = getByText('hello from TextField');
    expect(rendered).toBeTruthy();
  });

})