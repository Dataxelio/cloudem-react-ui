import React from 'react';
import { render } from '@testing-library/react';
import { BasicContentTextImpl } from './content-text-impl.composition';

describe('content-text-impl', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicContentTextImpl />);
    const rendered = getByText('hello from ContentTextImpl');
    expect(rendered).toBeTruthy();
  });

})