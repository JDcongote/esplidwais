import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthExceptionFilter } from './Filters/AuthExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Your Vite app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.useGlobalFilters(new AuthExceptionFilter());
  app.use((err, req, res, next) => {
    console.error('Global error handler');
    console.error(err);
    next(err);
  });
  await app.listen(4000);
}
bootstrap();
