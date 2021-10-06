import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import dbConfig from './configs/database.config';
import { UsersModule } from './modules/users.module';
import { I18nModule, I18nJsonParser } from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(dbConfig.getDBUrl()),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '/i18n/'),
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
