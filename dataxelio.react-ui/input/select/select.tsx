import React from 'react';

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Select = ( {children, ...rest}: SelectProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};