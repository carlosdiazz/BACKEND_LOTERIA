import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateLoteriaDto, UpdateLoteriaDto } from './loteria.dto';
import { Loteria } from './loteria.entity';

@Injectable()
export class LoteriaService {
  constructor(
    @InjectRepository(Loteria) private loteryRepo: Repository<Loteria>,
  ) {}

  async create(data: CreateLoteriaDto) {
    try {
      const newLotery = this.loteryRepo.create(data);
      return await this.loteryRepo.save(newLotery);
    } catch (error) {
      throw new BadRequestException(
        `${error.message || 'Paso un error al crear la Loteria'}'`,
      );
    }
  }

  async findAll() {
    return await this.loteryRepo.find();
  }

  async findOne(id: number) {
    const lotery = await this.loteryRepo.findOne({
      where: { id },
    });
    if (!lotery) {
      throw new NotFoundException('Esta loteria no existe');
    }
    return lotery;
  }

  async update(id: number, data: UpdateLoteriaDto) {
    await this.findOne(id);
    const lotery = await this.loteryRepo.findOneBy({ id });
    this.loteryRepo.merge(lotery, data);
    return this.loteryRepo.save(lotery);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.loteryRepo.delete(id);
  }
}
