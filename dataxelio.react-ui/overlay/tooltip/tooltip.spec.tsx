import React from 'react';
import { render } from '@testing-library/react';
import { BasicTooltip } from './tooltip.composition';

describe('tooltip', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicTooltip />);
    const rendered = getByText('hello from Tooltip');
    expect(rendered).toBeTruthy();
  });

})