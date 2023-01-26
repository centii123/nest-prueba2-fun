import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Estado } from './estado.entity'

@Entity()
export class Personas {
    @PrimaryGeneratedColumn()
    id_personas:number

    @Column({type: 'text'})
    nombres:string

    @ManyToOne(()=> Estado, (estados)=>estados.personas,{cascade: true})
    @JoinColumn({name: 'id_estado'})
    estados:Estado[]

}