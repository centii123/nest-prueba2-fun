import { Module } from '@nestjs/common';
import { Pag1Controller } from './pag1/pag1.controller';

@Module({
  controllers: [Pag1Controller]
})
export class ClienteModule {}
