import React from 'react';
import { render } from '@testing-library/react';
import { BasicPopoverTrigger } from './popover-trigger.composition';

describe('popover-trigger', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicPopoverTrigger />);
    const rendered = getByText('hello from PopoverTrigger');
    expect(rendered).toBeTruthy();
  });

})