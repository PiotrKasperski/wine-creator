import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WineDetail } from './wineDetail.entity';
import { Users } from '../login/users.entity';
import { Sugaring } from './sugaring.entity';

@Entity()
export class Wine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToOne(type => WineDetail, wineDetail => wineDetail.wine)
  wineDetail: WineDetail;

  @ManyToOne(type => Users, user => user.wines)
  user: Users;

  @OneToMany(type => Sugaring, sugaring => sugaring.wine)
  sugaring: Sugaring[];
}
