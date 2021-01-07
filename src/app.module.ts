import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { FriendModule } from './friend/friend.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './shared/filter/http-exception.filter';
import { ResponseTransformInterceptor } from './shared/interceptor/response-transform.interception';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    FriendModule,  
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseTransformInterceptor,
    }
  ]
})
export class AppModule {}
