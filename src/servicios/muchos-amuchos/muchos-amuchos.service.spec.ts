import { Test, TestingModule } from '@nestjs/testing';
import { MuchosAmuchosService } from './muchos-amuchos.service';

describe('MuchosAmuchosService', () => {
  let service: MuchosAmuchosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuchosAmuchosService],
    }).compile();

    service = module.get<MuchosAmuchosService>(MuchosAmuchosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
