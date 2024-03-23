import { FC } from 'react';

import { useToggle } from '@/shared/hooks';
import { Button } from '@/shared/ui/Button';
import { MainLayout } from '@/shared/ui/Layout/MainLayout/MainLayout';
import { AddTaskDialog } from '@/widgets/AddTaskDialog';

export const MainPage: FC = () => {
  const [addTaskDialogOpen, toggleAddTaskDialog] = useToggle();

  return (
    <MainLayout>
      Main page
      <AddTaskDialog
        open={addTaskDialogOpen}
        onOpenChange={toggleAddTaskDialog}
      />
      <Button onClick={toggleAddTaskDialog}>Добавить задачу</Button>
    </MainLayout>
  );
};
