import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users_tb')
export class User {
    @PrimaryGeneratedColumn('identity')
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
}