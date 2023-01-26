
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Personas } from 'src/database/personas.entity';
import { Repository } from 'typeorm';


@Injectable()
export class MuchosAmuchosService {
    constructor(
        @InjectRepository(Personas) private muchos:Repository<Personas>,
    ){}

    async join(){
        let consulta= await this.muchos.find({
            relations: ['estados'], //relacionar
        });
        return consulta
    }
}
