import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './modules/task/task.module';
import { UserModule } from './modules/user/user.module';
import { DB_CONNECTION } from 'contants/contants';

@Module({
  imports: [UserModule, TaskModule, MongooseModule.forRoot(DB_CONNECTION)],
  controllers: [],
  providers: [],
})
export class AppModule {}
