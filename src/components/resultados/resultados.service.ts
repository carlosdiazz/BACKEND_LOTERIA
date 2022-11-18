import { Injectable } from '@nestjs/common';
import { CreateResultadoDto, UpdateResultadoDto } from './resultado.dto';

@Injectable()
export class ResultadosService {
  create(data: CreateResultadoDto) {
    return 'This action adds a new resultado';
  }

  findAll() {
    return `This action returns all resultados`;
  }

  findOne(id: string) {
    return `This action returns a #${id} resultado`;
  }

  update(id: string, data: UpdateResultadoDto) {
    return `This action updates a #${id} resultado`;
  }

  remove(id: string) {
    return `This action removes a #${id} resultado`;
  }
}
