import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { CreateResultadoDto, UpdateResultadoDto } from './resultado.dto';
import { Resultado, resultadoType } from './resultado.entity';

import { Loteria, loteriaType } from '../loterias/loteria.entity';
import { Sorteo, sorteoType } from '../sorteos/sorteo.entity';
import { Juego, juegoType } from '../juegos/juego.entity';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectModel(Resultado.name) private resultadoModel: Model<resultadoType>,
    @InjectModel(Loteria.name) private loteriaModel: Model<loteriaType>,
    @InjectModel(Sorteo.name) private sorteoModel: Model<sorteoType>,
    @InjectModel(Juego.name) private juegoModel: Model<juegoType>,
  ) {}

  async create(data: CreateResultadoDto) {
    try {
      const { id_loteria, id_sorteo, numeros_ganadores } = data;
      await this.validarIdLoteria(id_loteria);
      const sorteo = await this.validarIdSorteo(id_sorteo);

      const { id_juego } = sorteo;

      const juego = await this.validarIdJuego(id_juego);

      const { posiciones, rango_minimo, rango_maximo } = juego;

      //console.log(numeros_ganadores.length);
      //console.log(posiciones);
      if (!(posiciones === numeros_ganadores.length)) {
        throw new NotFoundException(
          'Enviaste mas o menos posiciones segun la que soporta el juego',
        );
      }

      for (const numeros of numeros_ganadores) {
        if (!(numeros >= rango_minimo && numeros <= rango_maximo)) {
          throw new NotFoundException(
            'Algun digito de este resultado no cumple con los requisitos del jeugos',
          );
        }
      }

      const newResultado = new this.resultadoModel(data);
      return await newResultado.save();
      //return await (await newResultado.populate('id_sorteo', 'name ').populate('id_loteria', 'name -_id'))
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<Resultado[]> {
    return await this.resultadoModel
      .find()
      .populate('id_sorteo', 'name ')
      .populate('id_loteria', 'name -_id')
      .exec();
  }

  async findOne(id: string): Promise<Resultado> {
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

  async validarIdLoteria(id: string): Promise<Loteria> {
    const lotery = await this.loteriaModel.findById(id);
    if (!lotery) {
      throw new NotFoundException('Este ID no tiene una loteria vinculada');
    }
    return lotery;
  }

  async validarIdSorteo(id: string): Promise<Sorteo> {
    const sorteo = await this.sorteoModel.findById(id);
    if (!sorteo) {
      throw new NotFoundException('Este ID no tiene un Sorteo vinculado');
    }
    return sorteo;
  }

  async validarIdJuego(id: Types.ObjectId): Promise<Juego> {
    const juego = await this.juegoModel.findById(id);
    if (!juego) {
      throw new NotFoundException('Este ID no tiene un Juego vinculado');
    }
    return juego;
  }
}
