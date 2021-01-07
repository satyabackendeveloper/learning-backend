import { Catch, ExceptionFilter, HttpException, ArgumentsHost } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = exception.getStatus();
    response
      .status(statusCode)
      .json({
        message: exception.getResponse()['error'] || exception.getResponse() || null,
        error: exception.getResponse()['message'] || []
      });
    }
}
  