import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Flights } from "./flights.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Flights])],
  controllers: [FlightsController],
  providers: [FlightsService],
})
export class FlightsModule {}
