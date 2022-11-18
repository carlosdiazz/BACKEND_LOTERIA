import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateResultadoDto, UpdateResultadoDto } from './resultado.dto';
import { Resultado, resultadoType } from './resultado.entity';

import { Loteria, loteriaType } from '../loterias/loteria.entity';
import { Sorteo, sorteoType } from '../sorteos/sorteo.entity';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectModel(Resultado.name) private resultadoModel: Model<resultadoType>,
    @InjectModel(Loteria.name) private loteriaModel: Model<loteriaType>,
    @InjectModel(Sorteo.name) private sorteoModel: Model<sorteoType>,
  ) {}

  async create(data: CreateResultadoDto) {
    try {
      const { id_loteria, id_sorteo } = data;
      await this.validarIdLoteria(id_loteria);
      await this.validarIdSorteo(id_sorteo);

      const newResultado = new this.resultadoModel(data);
      return await (await (await newResultado.save())
        .populate('id_sorteo', 'name -_id'))
        .populate('id_loteria', 'name -_id');
    }catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll():Promise<Resultado[]> {
    return await this.resultadoModel
      .find()
      .populate('id_sorteo', 'name ')
      .populate('id_loteria', 'name -_id')
      .exec();
  }

  async findOne(id: string):Promise<Resultado> {
    const resultado = await this.resultadoModel
      .findById(id)
      .populate('id_sorteo', 'name -_id')
      .populate('id_loteria', 'name -_id');
    if (!resultado) {
      throw new NotFoundException('Esta Resultado no existe');
    }
    return resultado;
  }

  async update(id: string, data: UpdateResultadoDto) {
    await this.findOne(id);
    return await this.resultadoModel
      .findByIdAndUpdate(id, { $set: data }, { new: true })
      .populate('id_sorteo', 'name -_id')
      .populate('id_loteria', 'name -_id')
      .exec();
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.resultadoModel.findByIdAndDelete(id);
  }

  async validarIdLoteria(id: string) {
    const juego = await this.loteriaModel.findById(id)
    if (!juego) {
      throw new NotFoundException('Este ID no tiene una loteria vinculada');
    }
    return juego;
  }

  async validarIdSorteo(id: string) {
    const juego = await this.sorteoModel.findById(id);
    if (!juego) {
      throw new NotFoundException('Este ID no tiene un Sorteo vinculado');
    }
    return juego;
  }
}
