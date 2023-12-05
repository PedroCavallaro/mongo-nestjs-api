import { Inject, Injectable } from '@nestjs/common';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepositorie';

@Injectable()
export class SignUp {
  @Inject(UserRepository)
  private readonly userRepo: UserRepository;

  execute(user: User) {
    return this.userRepo.create(user);
  }
}
