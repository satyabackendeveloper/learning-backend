import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Set global prefix for api endpoints
  app.setGlobalPrefix('api/v1');
  // Add cors
  app.enableCors({origin: '*'});
  // Add headers to prevent from vulnerabilities
  app.use(helmet());
  // Server listening
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
