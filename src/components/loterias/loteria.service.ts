import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateLoteriaDto, UpdateLoteriaDto } from './loteria.dto';
import { Loteria, loteriaType } from './loteria.entity';

import { Sorteo, sorteoType } from '../sorteos/sorteo.entity';
import { Resultado, resultadoType } from '../resultados/resultado.entity';

@Injectable()
export class LoteriasService {
  constructor(
    @InjectModel(Loteria.name) private loteriaModel: Model<loteriaType>,
    @InjectModel(Sorteo.name) private sorteoModel: Model<sorteoType>,
    @InjectModel(Resultado.name) private resultadoModel: Model<resultadoType>,
  ) {}

  async create(data: CreateLoteriaDto) {
    try {
      const newLotery = new this.loteriaModel(data);
      return await newLotery.save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<Loteria[]> {
    return await this.loteriaModel.find().exec();
  }

  async findOne(id: string) {
    const lotery = await this.loteriaModel.findById(id);
    if (!lotery) {
      throw new NotFoundException('Esta Loteria no existe');
    }
    return lotery;
  }

  async update(id: string, data: UpdateLoteriaDto) {
    await this.findOne(id);
    return await this.loteriaModel
      .findByIdAndUpdate(id, { $set: data }, { new: true })
      .exec();
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.validarQueNoTengaRelacionesEnResultados(id);
    await this.validarQueNoTengaRelacionesEnSorteo(id);
    return await this.loteriaModel.findByIdAndDelete(id);
  }

  async validarQueNoTengaRelacionesEnSorteo(id: string) {
    const validar = await this.sorteoModel.find({ id_loteria: id });
    if (validar.length >= 1) {
      throw new NotFoundException(
        'No se puede eliminar esta Loteria, Ya pertenece a Sorteos',
      );
    }
  }

  async validarQueNoTengaRelacionesEnResultados(id: string) {
    const validar = await this.resultadoModel.find({ id_loteria: id });
    if (validar.length >= 1) {
      throw new NotFoundException(
        'No se puede eliminar esta Loteria, Ya pertenece a un Resultado',
      );
    }
  }

}
