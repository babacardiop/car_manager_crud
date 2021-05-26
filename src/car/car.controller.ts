import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarDto } from './car.dto';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
    constructor(private carService: CarService){}

    @Get()
    async getCars(){
        return this.carService.getCars();
    }

    @Get(':id')
    getCarById(@Param('id') id){
        return this.carService.getCarById(id);
    }

    @Post()
    public async createCar(@Body() car: CarDto){
        return this.carService.postCar(car);
    }

    @Put(':id')
    public async putCar(@Param('id') id, @Query() query){
        return this.carService.putCarById(id, query.property_name, query.property_value);
    }

    @Delete(':id')
    public async deleteCar(@Param('id') id: number){
        return this.carService.deleteCarById(id);
    }
}
