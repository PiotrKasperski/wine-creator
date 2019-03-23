import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Wine} from "./wine.entity";

@Entity()
export class WineDetail{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: Date;

    @Column()
    starterBlg: number;

    @Column()
    fruitAmount: number;

   @OneToOne(type => Wine, wine => wine.wineDetail)
   @JoinColumn()
   wine: Wine;



}