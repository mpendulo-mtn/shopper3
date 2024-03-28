import { Test, TestingModule } from '@nestjs/testing';
import { Shopper3Controller } from '../../src/controller/shopper3.controller';
import { Shopper3Service } from '../../src/services/shopper3.service';

describe('Shopper3Controller', () => {
  let controller: Shopper3Controller;
  let service: Shopper3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Shopper3Controller],
      providers: [Shopper3Service],
    }).compile();

    controller = module.get<Shopper3Controller>(Shopper3Controller);
    service = module.get<Shopper3Service>(Shopper3Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string from the service', () => {
      const mockResponse = 'Mock response from service';
      jest.spyOn(service, 'findAll').mockReturnValue(mockResponse);

      const result = controller.findAll();
      expect(result).toEqual(mockResponse);
    });
  });
});
