import { Inject, Injectable } from '@nestjs/common';
import { Task } from '../models/Task';
import { TaskRepositorie } from '../repositories/TaskRepositorie';

@Injectable()
export class TaskService {
  @Inject(TaskRepositorie)
  private readonly taskRepo: TaskRepositorie;

  getAll() {
    return this.taskRepo.getAll();
  }
  getById(id: string) {
    return this.taskRepo.getById(id);
  }
  create(task: Task) {
    return this.taskRepo.create(task);
  }

  update(id: string, task: Task) {
    return this.taskRepo.update(id, task);
  }

  delete(id: string) {
    return this.taskRepo.delete(id);
  }
}
