import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateSorteoDto, UpdateSorteoDto } from './sorteo.dto';
import { Sorteo } from './sorteo.entity';

@Injectable()
export class SorteoService {
  constructor(
    @InjectRepository(Sorteo) private sorteoRepo: Repository<Sorteo>,
  ) {}

  async create(data: CreateSorteoDto) {
    try {
      const newSorteo = this.sorteoRepo.create(data);
      return await this.sorteoRepo.save(newSorteo);
    } catch (error) {
      throw new BadRequestException(
        `${error.message || 'Paso un error al crear el Sorteo'}'`,
      );
    }
  }

  async findAll() {
    return await this.sorteoRepo.find();
  }

  async findOne(id: number) {
    const sorteo = await this.sorteoRepo.findOne({
      where: { id },
    });
    if (!sorteo) {
      throw new NotFoundException('Este sorteo no existe');
    }
    return sorteo;
  }

  async update(id: number, data: UpdateSorteoDto) {
    await this.findOne(id);
    const sorteo = await this.sorteoRepo.findOneBy({ id });
    this.sorteoRepo.merge(sorteo, data);
    return this.sorteoRepo.save(sorteo);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.sorteoRepo.delete(id);
  }
}
