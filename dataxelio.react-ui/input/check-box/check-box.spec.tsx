import React from 'react';
import { render } from '@testing-library/react';
import { BasicCheckBox } from './check-box.composition';

describe('check-box', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicCheckBox />);
    const rendered = getByText('hello from CheckBox');
    expect(rendered).toBeTruthy();
  });

})