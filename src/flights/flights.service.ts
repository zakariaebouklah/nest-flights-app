import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Flights } from './flights.entity';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class FlightsService {
    constructor(
        @InjectRepository(Flights)
        private readonly repository: Repository<Flights>
    ) {}

    //"READ" IMPLEMENTATION

    async getAllFlights(): Promise<Flights[]>
    {
        return await this.repository.find();
    }

    async getFlight(id: number): Promise<Flights>
    {
        // @ts-ignore
        return await this.repository.findOne({
            where: {
                id: id
            }
        });
    }

    async getFlightByOriginAndDest(org, dest): Promise<Flights[]>
    {
        return await this.repository.find({
            where: {
                origin: org,
                destination: dest
            }
        })
    }

    //"DELETE" IMPLEMENTATION

    async deleteFlight(id: number): Promise<DeleteResult>
    {
        return await this.repository.delete(id);
    }

    //"CREATE" IMPLEMENTATION

    async createFlight(flight: Flights): Promise<Flights>
    {
        return await this.repository.save(flight);
    }

    //"UPDATE" IMPLEMENTATION

    async updateFlight(flight: Flights): Promise<UpdateResult>
    {
        return await this.repository.update(flight.id, flight);
    }
}
