import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Task as TaskModel } from '@prisma/client';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post('create')
  async create(
    @Body()
    data: {
      title: string;
      isDone: boolean;
      dateOfCreate: Date | string;
    },
  ): Promise<TaskModel> {
    return this.taskService.createTask(data);
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<TaskModel> {
    return this.taskService.task({ id: Number(id) });
  }

  @Get('all')
  async getTasks(): Promise<TaskModel[]> {
    return this.taskService.tasks({});
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<TaskModel> {
    return this.taskService.deleteTask({ id: Number(id) });
  }
}
