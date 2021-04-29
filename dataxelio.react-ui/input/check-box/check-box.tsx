import React from 'react';

export interface CheckBoxProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const CheckBox = ( {children, ...rest}: CheckBoxProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};