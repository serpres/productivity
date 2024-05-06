import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

type ComposeTopicFormFields = {
  taskName: string;
};

export function AddTaskForm() {
  const { register, handleSubmit } = useForm<ComposeTopicFormFields>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<ComposeTopicFormFields> = data => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={''}
          {...register('taskName')}
          name="taskName"
          // value={formData.taskName || ''}
        />
        <Button type="submit">Сохранить</Button>
      </form>
    </>
  );
}
