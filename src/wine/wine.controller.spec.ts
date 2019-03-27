import { Test, TestingModule } from '@nestjs/testing';
import { WineController } from './wine.controller';
import { WineService } from './wine.service';
import { async } from 'rxjs/internal/scheduler/async';
import { Wine } from '../wine';

describe('Wine Controller', () => {
  let controller: WineController;
  let wineService: WineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WineController],
      providers: [WineService],
    }).compile();

    controller = module.get<WineController>(WineController);
    wineService = module.get<WineService>(WineService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should have services defined', () => {
    expect(wineService).toBeDefined();
  });

  describe('getWines', () => {
    it('should retern array of wines', async () => {
      const result = [{ name: 'pierwszy', id: 666 }];
      jest.spyOn(wineService, 'getWines').mockImplementation(() => result);

      //wexpect(await )
      expect(await controller.getWines()).toBe(result[0].name);
    });
  });
  describe('getWine', () => {
    it('schoud return wine object', async () => {
      const mockWine: Wine = new Wine('pierwszy', 666);
      jest.spyOn(wineService, 'getWine').mockImplementation(() => mockWine);
      expect(await controller.getWine({ id: 666 })).toBe(mockWine.toString());
    });
  });
});
