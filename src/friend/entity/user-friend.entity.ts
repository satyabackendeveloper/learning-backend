import { User } from "src/user/entity/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'user_friend' })
export class UserFriend {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    requester_id: string;

    @Column()
    requestee_id: string;

    @ManyToOne(() => User, user => user.requestees)
    @JoinColumn({
        name: 'requestee_id'
    })
    requestee: User;

    @ManyToOne(() => User, user => user.requesters)
    @JoinColumn({
        name: 'requester_id'
    })
    requester: User;
}
