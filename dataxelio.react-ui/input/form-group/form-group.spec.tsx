import React from 'react';
import { render } from '@testing-library/react';
import { BasicFormGroup } from './form-group.composition';

describe('form-group', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicFormGroup />);
    const rendered = getByText('hello from FormGroup');
    expect(rendered).toBeTruthy();
  });

})