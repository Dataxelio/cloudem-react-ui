import React from 'react';
import { render } from '@testing-library/react';
import { BasicFlexLayout } from './flex-layout.composition';

describe('flex-layout', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicFlexLayout />);
    const rendered = getByText('hello from FlexLayout');
    expect(rendered).toBeTruthy();
  });

})