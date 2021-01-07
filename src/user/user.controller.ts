import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    //constructor
    constructor(
        private userService: UserService
    ){}

    // Method to get list of users
    @Get()
    async getUserList(
        @Query() query: PaginationDto
    ): Promise<[string, unknown]> {
        const users = await this.userService.getUserList(query);
        return [
            'Users fetched successfully',
            users
        ];
    }
}
