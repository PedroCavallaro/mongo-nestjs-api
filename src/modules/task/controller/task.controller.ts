import {
  Controller,
  Inject,
  Param,
  Post,
  Get,
  Patch,
  Body,
  Delete,
} from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { Task } from '../models/Task';

@Controller('task')
export class TaskController {
  @Inject(TaskService)
  private readonly taskService: TaskService;

  @Get()
  findAll() {
    return this.taskService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.getById(id);
  }

  @Post()
  create(@Body() body: Task) {
    return this.taskService.create(body);
  }

  @Patch()
  update(@Body() body: { id: string; task: Task }) {
    return this.taskService.update(body.id, body.task);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
