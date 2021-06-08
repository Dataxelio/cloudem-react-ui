import React from 'react';
import { render } from '@testing-library/react';
import { BasicLabel } from './label.composition';

describe('label', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicLabel />);
    const rendered = getByText('hello from Label');
    expect(rendered).toBeTruthy();
  });

})