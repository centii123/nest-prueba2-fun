import { Test, TestingModule } from '@nestjs/testing';
import { Pag1Controller } from './pag1.controller';

describe('Pag1Controller', () => {
  let controller: Pag1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Pag1Controller],
    }).compile();

    controller = module.get<Pag1Controller>(Pag1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
