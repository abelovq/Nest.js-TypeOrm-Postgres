import { Entity, Column, BeforeInsert } from 'typeorm';
import { BaseEntity } from '../base-entity';
import * as bcrypt from 'bcrypt'

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 20, nullable: false })
  first_name: string;
  @Column({ type: 'varchar', length: 20, nullable: false })
  last_name: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;
  @Column({ type: 'varchar', length: 20, nullable: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    return this.password = await bcrypt.hash(this.password, 10);
  }
}
