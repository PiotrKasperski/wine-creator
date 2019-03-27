import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Wine } from './wine.entity';

@Entity()
export class Sugaring {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  sugar: number;

  @Column()
  water: number;

  @ManyToOne(type => Wine, wine => wine.sugaring)
  wine: Wine;
}
