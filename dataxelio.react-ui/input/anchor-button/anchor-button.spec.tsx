import React from 'react';
import { render } from '@testing-library/react';
import { BasicAnchorButton } from './anchor-button.composition';

describe('anchor-button', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicAnchorButton />);
    const rendered = getByText('hello from AnchorButton');
    expect(rendered).toBeTruthy();
  });

})