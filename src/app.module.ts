import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';

dotenv.config();
const {
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_PORT,
  MONGO_INITDB_DATABASE,
} = process.env;

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:${MONGO_PORT}/${MONGO_INITDB_DATABASE}`,
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
