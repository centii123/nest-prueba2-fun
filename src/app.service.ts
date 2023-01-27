import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { nombres } from './database/nombres.entity';
import { PaginationQueryDTO } from './DTO/pagination-query.dto';


@Injectable()
export class AppService {
  constructor(
    @InjectRepository(nombres) private hola: Repository<nombres>
  ){}

   async getHello({limit, offset}: PaginationQueryDTO): Promise<nombres[]>{

      let consulta= await this.hola.query(`SELECT * FROM nombres ORDER BY id_nombres LIMIT ${limit} OFFSET ${offset}`,); //O-.find()

        return consulta
      

    
    ;
  }

  post(a){
    this.hola.query(`Insert into nombres(descripccion) values ('${a}')`)
    return 'ingresado'
  }
}
