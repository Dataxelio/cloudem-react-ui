import React from 'react';
import { render } from '@testing-library/react';
import { BasicContent } from './content.composition';

describe('content', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicContent />);
    const rendered = getByText('hello from Content');
    expect(rendered).toBeTruthy();
  });

})