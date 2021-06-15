import React from 'react';

export type SidebarProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Sidebar({ text }: SidebarProps) {
  return (
    <div>
      {text}
    </div>
  );
}
