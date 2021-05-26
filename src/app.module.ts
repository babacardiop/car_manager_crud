import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CarModule, 
    MongooseModule.forRoot('mongodb://localhost/cars')
  ]
})
export class AppModule {}
