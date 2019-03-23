import { Test, TestingModule } from '@nestjs/testing';
import { WineService } from './wine.service';
import {Wine} from "../wine";

describe('WineService', () => {
  let service: WineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WineService],
    }).compile();

    service = module.get<WineService>(WineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('getWine', ()=>{
    it('should return wine object with proper id', ()=>{
      const mockWines: Array<Wine> =[new Wine('ok', 666), new Wine('bad', 12)];
      service.mockWines = mockWines;
      expect(service.getWine(666)).toBe(mockWines[0]);
    })
  })

});
