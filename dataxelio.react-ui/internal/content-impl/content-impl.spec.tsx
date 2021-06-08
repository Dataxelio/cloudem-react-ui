import React from 'react';
import { render } from '@testing-library/react';
import { BasicContentImpl } from './content-impl.composition';

describe('content-impl', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicContentImpl />);
    const rendered = getByText('hello from ContentImpl');
    expect(rendered).toBeTruthy();
  });

})