import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateSorteoDto, UpdateSorteoDto } from './sorteo.dto';
import { Sorteo, sorteoType } from './sorteo.entity';

import { Juego, juegoType } from '../juegos/juego.entity';
import { Loteria, loteriaType } from '../loterias/loteria.entity';

@Injectable()
export class SorteosService {
  constructor(
    @InjectModel(Sorteo.name) private sorteoModel: Model<sorteoType>,
    @InjectModel(Juego.name) private juegoModel: Model<juegoType>,
    @InjectModel(Loteria.name) private loteriaModel: Model<loteriaType>,
  ) {}

  async create(data: CreateSorteoDto) {
    try {
      const { id_juego, id_loteria } = data;
      await this.validarIdJuego(id_juego);
      await this.validarIdLoteria(id_loteria);

      const newSorteo = new this.sorteoModel(data);
      return await (
        await (await newSorteo.save())
          .populate('id_juego', 'name')
      )   .populate('id_loteria', 'name');
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<Sorteo[]> {
    return await this.sorteoModel
      .find()
      .populate('id_juego', 'name')
      .populate('id_loteria', 'name')
      .exec();
  }

  async findOne(id: string): Promise<Sorteo> {
    const sorteo = await this.sorteoModel
      .findById(id)
      .populate('id_juego', 'name')
      .populate('id_loteria', 'name');
    if (!sorteo) {
      throw new NotFoundException('No se ecnontro este Sorteo');
    }
    return sorteo;
  }

  async update(id: string, data: UpdateSorteoDto) {
    await this.findOne(id);
    if (data.id_juego) {
      await this.validarIdJuego(data.id_juego);
    }
    if (data.id_loteria) {
      await this.validarIdLoteria(data.id_juego);
    }

    return await this.sorteoModel
      .findByIdAndUpdate(id, { $set: data }, { new: true })
      .exec();
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.sorteoModel.findByIdAndDelete(id);
  }

  async validarIdJuego(id: string) {
    const juego = await this.juegoModel.findById(id);
    if (!juego) {
      throw new NotFoundException('Este ID no tiene un juego vinculado');
    }
    return juego;
  }

  async validarIdLoteria(id: string) {
    const juego = await this.loteriaModel.findById(id);
    if (!juego) {
      throw new NotFoundException('Este ID no tiene una loteria vinculada');
    }
    return juego;
  }
}
