import React from 'react';
import { render } from '@testing-library/react';
import { BasicDivider } from './divider.composition';

describe('divider', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicDivider />);
    const rendered = getByText('hello from Divider');
    expect(rendered).toBeTruthy();
  });

})