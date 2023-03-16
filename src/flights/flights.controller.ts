import { Controller, Get, Param } from "@nestjs/common";
import { FlightsService } from './flights.service';
import { Flights } from "./flights.entity";

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  findAllFlights(): Promise<Flights[]>
  {
    return this.flightsService.getAllFlights();
  }

  @Get('/:id')
  findFlight(@Param() param): Promise<Flights>
  {
    return this.flightsService.getFlight(param.id)
  }
}
