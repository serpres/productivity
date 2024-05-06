import '../../../app/global.scss';

import React from 'react';
import { ComponentProps } from 'react';

import { Dialog } from './Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

const Template = (args: ComponentProps<typeof Dialog>) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Dialog Title',
  description: 'Описание',
  open: true,
  onOpenChange: (open: boolean) => console.log(open),
};
