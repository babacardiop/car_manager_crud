import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from './car.interface';
import { CarDto } from './car.dto';

const carProjection = {
__v: false,
_id: false
};

@Injectable()
export class CarService {
    constructor(@InjectModel('Car') private readonly carModel: Model<ICar>){
    }

    public async getCars() : Promise<CarDto[]>{
        const cars = await this.carModel.find({}, carProjection).exec();
        return cars;
    }

    public async postCar(newCar) : Promise<CarDto> {
        const car = await this.carModel.create(newCar);
        return car.save();
    }

    public async getCarById(id) : Promise<CarDto> {
    const car = this.carModel.findOne({id}, carProjection).exec();
     if(!car) {
         throw new HttpException('Not Found', 404);
     }   

     return car;
    }

    public async putCarById(id, property_name:string, property_value:string) : Promise<CarDto> {
      const car = this.carModel.findOneAndUpdate(id, {[property_name] : property_value}).exec();  
      return car;
    }

    public async deleteCarById(id:number){
        const car = await this.carModel.deleteOne({id}).exec();

        if(car.deletedCount === 0){
            throw new HttpException('Not Found', 404);
        }

        return HttpStatus.NO_CONTENT;
    }
}
