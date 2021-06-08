import React from 'react';
import { render } from '@testing-library/react';
import { BasicDialog } from './dialog.composition';

describe('dialog', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicDialog />);
    const rendered = getByText('hello from Dialog');
    expect(rendered).toBeTruthy();
  });

})