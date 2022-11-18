import { PartialType } from '@nestjs/swagger';

export class CreateResultadoDto { }

export class UpdateResultadoDto extends PartialType(CreateResultadoDto) {}
