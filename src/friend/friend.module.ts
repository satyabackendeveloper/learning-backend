import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';
import { UserFriendRepository } from './repository/user-friend.repository';
import { UserRepository } from './../user/repository/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserFriendRepository,
      UserRepository
    ])
  ],
  controllers: [FriendController],
  providers: [FriendService]
})
export class FriendModule {}
