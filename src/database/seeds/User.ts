import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { User } from './../../constant/seed/user-data';
export default class CreateUser implements Seeder {

  public async run(factory: Factory, connection: Connection): Promise<any> {
   
    let user;
    for(let i = 0; i < User.length ; i++){
      user = User[i]
        await connection
        .createQueryBuilder()
        .insert()
        .into("users")
        .values({ 
           id: user.id, 
           firstname: user.firstname,
           lastname: user.lastname, 
           avatar: user.avatar,
          })
        .execute()
    }
  }
}