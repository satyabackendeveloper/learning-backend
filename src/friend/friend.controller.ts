import { Controller, Get, Param, Query } from '@nestjs/common';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { FriendService } from './friend.service';

@Controller('user/:id/friend')
export class FriendController {
    //constructor
    constructor(
        private friendService: FriendService
    ){}

    // Method to get list of friend
    @Get()
    async getFriendList(
        @Param('id') id: string,
        @Query() query: PaginationDto
    ):Promise<[string, unknown]> {
        const friends = await this.friendService.getFriendList(id, query);
        return [
            'Friend fetched successfully',
            friends
        ]
    }
}
