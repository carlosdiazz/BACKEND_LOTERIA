import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { LoteriasService } from './loteria.service';
import { CreateLoteriaDto, UpdateLoteriaDto } from './loteria.dto';
import { ParseObjectIdPipe } from '../common/parseObjectIdMongo.pipe';

@ApiTags('Loteria')
@Controller('loteria')
export class LoteriasController {
  constructor(private readonly loteriaService: LoteriasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una Loteria' })
  create(@Body() createLoteriaDto: CreateLoteriaDto) {
    return this.loteriaService.create(createLoteriaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las Loteria' })
  findAll() {
    return this.loteriaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una Loteria especifica' })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.loteriaService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una Loteria especifica' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateLoteriaDto: UpdateLoteriaDto,
  ) {
    return this.loteriaService.update(id, updateLoteriaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una Loteria especifica' })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.loteriaService.remove(id);
  }
}
