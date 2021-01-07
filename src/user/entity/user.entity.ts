import { UserFriend } from "src/friend/entity/user-friend.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    avatar: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => UserFriend, userFriend => userFriend.requestee)
    requestees: UserFriend[];


    @OneToMany(() => UserFriend, userFriend => userFriend.requester)
    requesters: UserFriend[];

}
