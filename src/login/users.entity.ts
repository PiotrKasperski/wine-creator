import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Wine } from '../wine/wine.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  username: string;

  @Column({ length: 100, nullable: true })
  password: string | undefined;

  @Column({ length: 100, nullable: true })
  passwordHash: string | undefined;

  @Column({ length: 500 })
  email: string;
  @OneToMany(type => Wine, wine => wine.user)
  wines: Wine[];
}
