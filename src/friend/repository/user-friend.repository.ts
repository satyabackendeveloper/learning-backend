import { EntityRepository, Repository } from "typeorm";
import { UserFriend } from './../../friend/entity/user-friend.entity';

@EntityRepository(UserFriend)
export class UserFriendRepository extends Repository<UserFriend> {
    // get list of user's friends
    getFriendList(
        user_id: string,
        skip: number,
        take: number
    ) {
        return this.createQueryBuilder('friend')
        .leftJoinAndSelect('friend.requester', 'requester')
        .leftJoinAndSelect('friend.requestee', 'requestee')
        .where("requester_id = :requester_id", { requester_id: user_id})
        .orWhere("requestee_id = :requestee_id", { requestee_id: user_id})
        .skip(skip)
        .take(take)
        .getManyAndCount();
    }
}