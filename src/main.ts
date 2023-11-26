import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { VersioningType } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: "*" });
  app.enableVersioning({ type: VersioningType.URI });

  await app.listen(process.env.PORT, () => {
    console.log(`Application is running on Port ${process.env.PORT}`);
  });
}
bootstrap();
