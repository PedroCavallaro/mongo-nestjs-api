import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/UserRepositorie';
import { UserController } from './controller/user.controller';
import { SignUp } from './use-cases/SignUp.usecase';
import { UserSchema } from 'src/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [SignUp, UserRepository],
})
export class UserModule {}
