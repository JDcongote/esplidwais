import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class AuthExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    console.error('Authorization error:', exception.message);

    if (exception instanceof UnauthorizedException) {
      if (!response.headersSent) {
        response.status(status).json({
          statusCode: status,
          message: 'Unauthorized',
        });
      }
    } else {
      // Handle other exceptions if needed
      if (!response.headersSent) {
        response.status(status).json({
          statusCode: status,
          message: exception.message,
        });
      }
    }
  }
}
