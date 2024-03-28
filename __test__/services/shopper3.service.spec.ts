import { Test, TestingModule } from '@nestjs/testing';
import { Shopper3Service } from '../../src/services/shopper3.service';

describe('Shopper3Service', () => {
  let service: Shopper3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Shopper3Service],
    }).compile();

    service = module.get<Shopper3Service>(Shopper3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string', () => {
      const result = service.findAll();
      expect(result).toEqual(expect.any(String));
    });

    it('should return a greeting message', () => {
      const result = service.findAll();
      expect(result).toEqual('Hello from shopper3 service');
    });
  });
});
