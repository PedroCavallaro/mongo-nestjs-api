import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from '../../schemas/task.schema';
import { TaskService } from './services/task.service';
import { TaskRepositorie } from './repositories/TaskRepositorie';
import { TaskController } from './controller/task.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Task',
        schema: TaskSchema,
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskRepositorie, TaskService],
})
export class TaskModule {}
