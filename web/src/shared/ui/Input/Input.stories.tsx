import '../../../app/global.scss';

import React from 'react';
import { ComponentProps } from 'react';

import { Input } from './Input';
export default { title: 'Input', component: Input, tags: ['autodocs'] };
const Template = (arg: ComponentProps<typeof Input>) => <Input {...arg} />;
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Введите текст...',
  label: 'Label для input',
};
