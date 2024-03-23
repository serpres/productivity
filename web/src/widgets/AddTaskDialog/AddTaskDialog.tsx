import { ComponentProps, FC } from 'react';

import { AddTaskForm } from '@/features/AddTaskForm';
import { Dialog } from '@/shared/ui/Dialog';

export const AddTaskDialog: FC<
  Omit<ComponentProps<typeof Dialog>, 'title'>
> = props => (
  <Dialog title="Добавить задание" {...props}>
    <AddTaskForm />
  </Dialog>
);
