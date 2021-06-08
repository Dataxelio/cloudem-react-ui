import React from 'react';
import { render } from '@testing-library/react';
import { BasicResourceViewer } from './resource-viewer.composition';

describe('resource-viewer', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicResourceViewer />);
    const rendered = getByText('hello from ResourceViewer');
    expect(rendered).toBeTruthy();
  });

})