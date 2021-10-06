import { Controller } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user.service';
import { BaseController } from './base.controller';

@Controller('users')
export class UserController extends BaseController<User> {
  /**
   *
   */
  constructor(private readonly service: UserService) {
    super(service);
  }
}
