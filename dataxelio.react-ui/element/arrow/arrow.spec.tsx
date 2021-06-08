import React from 'react';
import { render } from '@testing-library/react';
import { BasicArrow } from './arrow.composition';

describe('arrow', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicArrow />);
    const rendered = getByText('hello from Arrow');
    expect(rendered).toBeTruthy();
  });

})