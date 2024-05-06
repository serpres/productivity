import '../../../app/global.scss';

import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MenuItem } from '@/shared/ui/NavMenu/types';

// import { ComponentProps } from 'react';
import { NavMenu, NavMenuProps } from './NavMenu';

export default {
  title: 'NavMenu',
  component: NavMenu,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<NavMenuProps> = (args: NavMenuProps) => (
  <BrowserRouter>
    <NavMenu {...args} />
  </BrowserRouter>
);

const testMenuItems: MenuItem[] = [
  {
    id: '1',
    title: 'Item',
    path: '/',
    childItems: [
      {
        id: '1-1',
        title: 'Submenu 1',
        path: '/submenu-1',
      },
      {
        id: '1-2',
        title: 'Submenu 2',
        path: '/submenu-2',
      },
    ],
  },
];

export const Default = Template.bind({});
Default.args = {
  menuItems: testMenuItems,
};
