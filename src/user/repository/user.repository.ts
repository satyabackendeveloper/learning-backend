import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    // get list of users
    getUserList(
        skip: number,
        take: number
    ) {
        return this.createQueryBuilder('users')
        .skip(skip)
        .take(take)
        .getManyAndCount();
    }
}