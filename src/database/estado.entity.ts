import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Personas } from './personas.entity'

@Entity()
export class Estado {
    @PrimaryGeneratedColumn()
    id_estado:number

    @Column({type: 'text'})
    descripccion:string

    @OneToMany(()=> Personas, persona=> persona.estados)
    personas: Personas;
}