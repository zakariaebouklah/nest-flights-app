import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Flights } from './flights.entity';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class FlightsService {
    constructor(
        @InjectRepository(Flights)
        private readonly repository: Repository<Flights>
    ) {}

    async getAllFlights(): Promise<Flights[]>
    {
        return this.repository.find();
    }

    async getFlight(id: number): Promise<Flights>
    {
        // @ts-ignore
        return this.repository.findOne({
            where: {
                id: id
            }
        });
    }
}
