import React from 'react';
import { render } from '@testing-library/react';
import { BasicPaper } from './paper.composition';

describe('paper', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicPaper />);
    const rendered = getByText('hello from Paper');
    expect(rendered).toBeTruthy();
  });

})