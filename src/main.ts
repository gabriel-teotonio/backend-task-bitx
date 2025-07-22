import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const result = errors.map((error) => ({
          property: error.property,
          message: error.constraints ? error.constraints[Object.keys(error.constraints)[0]] : undefined,
        }));
        return new BadRequestException(result);
      },
      stopAtFirstError: true,
    }),
  );




  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
