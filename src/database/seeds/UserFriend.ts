import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { UserFriend } from './../../constant/seed/user-friend-data';

export default class CreateUserFriend implements Seeder {

  public async run(factory: Factory, connection: Connection): Promise<any> {
   
    let friend;
    for(let i = 0; i < UserFriend.length ; i++){
        friend = UserFriend[i]
        await connection
        .createQueryBuilder()
        .insert()
        .into("user_friend")
        .values({ 
           id: friend.id, 
           requester_id: friend.requester,
           requestee_id: friend.requestee
          })
        .execute()
    }
  }
}