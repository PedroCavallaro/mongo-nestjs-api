import { Document } from 'mongoose';
import { Task } from 'src/modules/task/models/Task';

export class User extends Document {
  username: String;
  createAt: Date;
  task?: Array<Task>;
}
