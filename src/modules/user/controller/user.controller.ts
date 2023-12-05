import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { User } from '../models/User';
import { SignUp } from '../use-cases/SignUp.usecase';
import { UserRepository } from '../repositories/UserRepositorie';

@Controller('user')
export class UserController {
  @Inject(SignUp)
  private readonly signUpUseCase: SignUp;
  @Inject(UserRepository)
  private readonly userRepo: UserRepository;

  @Post()
  signUp(@Body() body: User) {
    return this.signUpUseCase.execute(body);
  }

  @Get()
  listAll() {
    return this.userRepo.getAll();
  }
}
