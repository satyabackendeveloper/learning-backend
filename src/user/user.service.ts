import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { PaginationDto } from './../shared/dto/pagination.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    // constructor
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}

    // Method to get user list
    async getUserList(
        query: PaginationDto
    ): Promise<[User[], number]> {
        return await this.userRepository.getUserList(query.skip, query.take);
    }
}
