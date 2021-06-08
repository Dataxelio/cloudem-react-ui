import React from 'react';
import { render } from '@testing-library/react';
import { BasicBasicLayout } from './basic-layout.composition';

describe('basic-layout', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicBasicLayout />);
    const rendered = getByText('hello from BasicLayout');
    expect(rendered).toBeTruthy();
  });

})