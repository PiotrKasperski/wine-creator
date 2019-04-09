import {Injectable} from '@nestjs/common';
import {Wine} from './wine.entity';
import {Connection, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {WineDetail} from './wineDetail.entity';
import {Users} from '../login/users.entity';
import {Sugaring} from './sugaring.entity';

@Injectable()
export class WineService {
  // public mockWines: Array<Wine> =[new Wine('ok', 666), new Wine('bad', 12)];

  constructor(
    @InjectRepository(Wine)
    private readonly wineRepository: Repository<Wine>,
    private readonly connection: Connection,
  ) {}

  public async getWines(user: Users): Promise<any> {
    return (await this.connection
      .getRepository(Users)
      .find({ relations: ['wines'], where: { username: user.username } }))[0]
      .wines;
  }
  public async getWine(id: number): Promise<Wine> {
    console.log(
      (await this.wineRepository.find({
        relations: ['wineDetail', 'sugaring'],
        where: { id: id },
      }))[0],
    );
    return await this.wineRepository
      .createQueryBuilder('wine')
      .where('wine.id=:id', { id: id })
      .leftJoinAndSelect('wine.wineDetail', 'wineDetail')
      .getOne();
  }

    public async addWine(wine: Wine, user: Users) {
    // console.log(await this.wineRepository.createQueryBuilder().insert().into(this.wineRepository).values([{name: name}]).execute());
    console.log(user);
    const tmp = new Wine();
    const tmpDetail = new WineDetail();
        tmp.name = wine.name;
        tmpDetail.startDate = wine.wineDetail.startDate;
        tmpDetail.fruitAmount = wine.wineDetail.fruitAmount;
        tmpDetail.starterBlg = wine.wineDetail.starterBlg;
        tmpDetail.starterCapacity = wine.wineDetail.starterCapacity;
    await this.connection.getRepository(WineDetail).save(tmpDetail);

    tmp.wineDetail = tmpDetail;
    tmp.user = (await this.connection
      .getRepository(Users)
      .find({ username: user.username }))[0];

    return await this.wineRepository.save(tmp);
  }
  public async addSugar(sugaring: Sugaring, wineId: number): Promise<any> {
    let tmp = new Sugaring();
    tmp.date = new Date(Date.now());
    tmp.sugar = sugaring.sugar;
    tmp.water = sugaring.water;
    tmp.wine = (await this.wineRepository.find({ id: wineId }))[0];

    await this.connection.manager.save(tmp);

    return await this.wineRepository
      .createQueryBuilder('wine')
      .where('wine.id=:id', { id: wineId })
      .leftJoinAndSelect('wine.sugaring', 'sugaring')
      .getOne();
  }
}
