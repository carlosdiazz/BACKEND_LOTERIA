import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateJuegoDto, UpdateJuegoDto } from './juego.dto';
import { Juego } from './juego.entity';

import { Loteria } from '../loteria/loteria.entity';

@Injectable()
export class JuegoService {
  constructor(
    @InjectRepository(Juego) private juegoRepo: Repository<Juego>,
    @InjectRepository(Loteria) private loteriaRepo: Repository<Loteria>,
  ) {}

  async create(data: CreateJuegoDto) {
    try {
      const { loteriaId } = data;
      const loteria = await this.validarIdLoteria(loteriaId);
      const newjuego = this.juegoRepo.create(data);
      newjuego.loteria_id = loteria;

      return await this.juegoRepo.save(newjuego);
    } catch (error) {
      throw new BadRequestException(
        `${error.message || 'Paso un error al crear el Juego'}'`,
      );
    }
  }

  async findAll() {
    return await this.juegoRepo.find({
      relations: {
        loteria_id: {},
      },
    });
  }

  async findOne(id: number) {
    const juego = await this.juegoRepo.findOne({
      where: { id },
      relations: {
        loteria_id: {
          //abreviatura: false,
        },
      },
    });
    if (!juego) {
      throw new NotFoundException('Este juego no existe');
    }
    return juego;
  }

  async update(id: number, data: UpdateJuegoDto) {
    await this.findOne(id);
    const juego = await this.juegoRepo.findOneBy({ id });
    this.juegoRepo.merge(juego, data);
    return this.juegoRepo.save(juego);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.juegoRepo.delete(id);
  }

  async validarIdLoteria(id: number) {
    const loteria = await this.loteriaRepo.findOneBy({ id });
    if (!loteria) {
      throw new NotFoundException('Este id de loteria no existe');
    }
    return loteria;
  }
}
