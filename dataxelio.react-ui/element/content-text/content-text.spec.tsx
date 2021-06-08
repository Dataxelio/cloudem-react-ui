import React from 'react';
import { render } from '@testing-library/react';
import { BasicContentText } from './content-text.composition';

describe('content-text', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicContentText />);
    const rendered = getByText('hello from ContentText');
    expect(rendered).toBeTruthy();
  });

})