import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateJuegoDto, UpdateJuegoDto } from './juego.dto';
import { Juego, juegoType} from './juego.entity';

@Injectable()
export class JuegosService {
  constructor(
    @InjectModel(Juego.name) private juegoModel: Model<juegoType>,
  ) {}


  async create(data: CreateJuegoDto) {
    try {
      const newJuego = new this.juegoModel(data);
      return await newJuego.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    };
  }

  async findAll() {
    return await this.juegoModel.find().exec();
  }

  async findOne(id: string) {
    const juego = this.juegoModel.findById(id);
    if (!juego) {
      throw new NotFoundException('Este juego no existe');
    }
    return juego;
  }

  async update(id: string, data: UpdateJuegoDto) {
    await this.findOne(id);
    return await this.juegoModel
      .findByIdAndUpdate(id, { $set: data }, { new: true })
      .exec();
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.juegoModel.findByIdAndDelete(id);
  }
}
