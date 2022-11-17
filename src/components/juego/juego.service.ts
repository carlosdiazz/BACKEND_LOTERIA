import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateJuegoDto, UpdateJuegoDto } from './juego.dto';
import { Juego } from './juego.entity';

@Injectable()
export class JuegoService {
  constructor(@InjectRepository(Juego) private juegoRepo: Repository<Juego>) {}

  async create(data: CreateJuegoDto) {
    try {
      const newjuego = this.juegoRepo.create(data);
      return await this.juegoRepo.save(newjuego);
    } catch (error) {
      throw new BadRequestException(
        `${error.message || 'Paso un error al crear el Juego'}'`,
      );
    }
  }

  async findAll() {
    return await this.juegoRepo.find();
  }

  async findOne(id: number) {
    const juego = await this.juegoRepo.findOne({
      where: { id },
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
}
