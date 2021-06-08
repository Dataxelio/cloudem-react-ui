import React from 'react';
import { render } from '@testing-library/react';
import { BasicSubTitle } from './sub-title.composition';

describe('sub-title', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicSubTitle />);
    const rendered = getByText('hello from SubTitle');
    expect(rendered).toBeTruthy();
  });

})