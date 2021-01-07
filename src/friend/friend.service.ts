import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { UserRepository } from 'src/user/repository/user.repository';
import { UserFriend } from './entity/user-friend.entity';
import { UserFriendRepository } from './repository/user-friend.repository';

@Injectable()
export class FriendService {
    // constructor
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        @InjectRepository(UserFriendRepository)
        private userFriendRepository: UserFriendRepository
    ){}

    // Method to get friend list
    async getFriendList(
        userId: string,
        query: PaginationDto
    ): Promise<[UserFriend[], number]> {
        const user = await this.userRepository.findOne({ id: userId });
        console.log(user);
        if(!user) {
            throw new HttpException(
                'User not found',
                HttpStatus.NOT_FOUND
            )
        }
        return await this.userFriendRepository.getFriendList(userId, query.skip, query.take);
    }
}
