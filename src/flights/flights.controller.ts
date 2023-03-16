import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { FlightsService } from './flights.service';
import { Flights } from "./flights.entity";
import { DeleteResult } from "typeorm";

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  // Read all data
  @Get()
  findAllFlights(): Promise<Flights[]>
  {
    return this.flightsService.getAllFlights();
  }

  // Read a single record
  @Get('/:id')
  findFlight(@Param() param): Promise<Flights>
  {
    return this.flightsService.getFlight(param.id)
  }

  // Custom read
  @Get('query/:org/:dest')
  findAFlightByOriginAndDestination(@Param('org') org, @Param('dest') dest): Promise<Flights[]>
  {
    return this.flightsService.getFlightByOriginAndDest(org, dest)
  }

  // Delete data

  @Post('delete/:id')
  async deleteFlight(@Param() param): Promise<DeleteResult>
  {
    return this.flightsService.deleteFlight(param.id);
  }

  // Create data

  @Post()
  addNewFlight(@Body() flight: Flights): Promise<Flights>
  {
    return this.flightsService.createFlight(flight);
  }
}
