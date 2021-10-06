import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { BaseService } from './base.service';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class UserService extends BaseService<User> {
  /**
   *
   */
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    protected readonly i18n: I18nService,
  ) {
    super(userModel, i18n);
  }
}
