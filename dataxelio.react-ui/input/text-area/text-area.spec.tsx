import React from 'react';
import { render } from '@testing-library/react';
import { BasicTextArea } from './text-area.composition';

describe('text-area', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicTextArea />);
    const rendered = getByText('hello from TextArea');
    expect(rendered).toBeTruthy();
  });

})