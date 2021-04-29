import React from 'react';
import { render } from '@testing-library/react';
import { BasicSelect } from './select.composition';

describe('select', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicSelect />);
    const rendered = getByText('hello from Select');
    expect(rendered).toBeTruthy();
  });

})