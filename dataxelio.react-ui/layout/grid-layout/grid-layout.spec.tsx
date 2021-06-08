import React from 'react';
import { render } from '@testing-library/react';
import { BasicGridLayout } from './grid-layout.composition';

describe('grid-layout', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicGridLayout />);
    const rendered = getByText('hello from GridLayout');
    expect(rendered).toBeTruthy();
  });

})