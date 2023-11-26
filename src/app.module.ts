import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";

const { MONGO_DB_URI, MONGO_DATABASE } = process.env;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(MONGO_DB_URI, { authSource: MONGO_DATABASE }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
