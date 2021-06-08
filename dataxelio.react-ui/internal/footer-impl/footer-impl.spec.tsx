import React from 'react';
import { render } from '@testing-library/react';
import { BasicFooterImpl } from './footer-impl.composition';

describe('footer-impl', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicFooterImpl />);
    const rendered = getByText('hello from FooterImpl');
    expect(rendered).toBeTruthy();
  });

})