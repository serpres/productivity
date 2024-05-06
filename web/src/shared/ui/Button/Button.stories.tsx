import '../../../app/global.scss';

import React from 'react';
import { ComponentProps } from 'react';

import { Button } from './Button';
export default { title: 'Button', component: Button, tags: ['autodocs'] };
const Template = (arg: ComponentProps<typeof Button>) => <Button {...arg} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'primary',
};
