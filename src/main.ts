import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true
      }

    })
  )
  //app.enableCors(); //error de cors resuelto
  await app.listen(3000);
}
bootstrap();
