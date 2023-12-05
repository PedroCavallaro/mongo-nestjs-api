import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop()
  description: String;
  @Prop()
  completed: Boolean;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
