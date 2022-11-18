import { Injectable } from '@nestjs/common';
import { CreateSorteoDto, UpdateSorteoDto } from './sorteo.dto';

@Injectable()
export class SorteosService {
  create(createSorteoDto: CreateSorteoDto) {
    return 'This action adds a new sorteo';
  }

  findAll() {
    return `This action returns all sorteos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sorteo`;
  }

  update(id: number, updateSorteoDto: UpdateSorteoDto) {
    return `This action updates a #${id} sorteo`;
  }

  remove(id: number) {
    return `This action removes a #${id} sorteo`;
  }
}
