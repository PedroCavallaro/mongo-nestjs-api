import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Task } from 'src/modules/task/models/Task';

@Schema()
export class User {
  @Prop()
  username: String;
  @Prop()
  createAt: Date;
  @Prop()
  task: Array<Task>;
}

export const UserSchema = SchemaFactory.createForClass(User);
