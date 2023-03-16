import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flights {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 25 })
  origin: string;

  @Column('varchar', { length: 25 })
  destination: string;

  @Column('int')
  flightNumber: number;

  @Column('time with time zone')
  departure: Date;

  @Column('time with time zone')
  arrival: Date;

  @Column('boolean')
  nonstop: boolean;
}
