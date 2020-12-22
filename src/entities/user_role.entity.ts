import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('user_role')
export class User_role {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column({ type: 'varchar', nullable: false })
    user_id: string;
    @Column({ type: 'varchar', nullable: false })
    role_id: string;
}
