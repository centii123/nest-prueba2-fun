import { Estado } from './database/estado.entity';
import { Personas } from 'src/database/personas.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { nombres } from './database/nombres.entity';
import { MuchosAmuchosService } from './servicios/muchos-amuchos/muchos-amuchos.service';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '123',
        database: 'nestjs3',
        entities: [__dirname + '/**/*.entity{.ts,.js}'], 
        synchronize: true 

    }),
    TypeOrmModule.forFeature([nombres,Personas,Estado]),
    ClienteModule//importantisimo
  ],
  controllers: [AppController],
  providers: [AppService, MuchosAmuchosService],
})
export class AppModule {}
