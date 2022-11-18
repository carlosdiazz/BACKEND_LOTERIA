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

import { ParseObjectIdPipe } from '../common/parseObjectIdMongo.pipe';
import { ResultadosService } from './resultados.service';
import { CreateResultadoDto, UpdateResultadoDto } from './resultado.dto';

@ApiTags('Resultados')
@Controller('resultados')
export class ResultadosController {
  constructor(private readonly resultadosService: ResultadosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una Resultado' })
  create(@Body() createResultadoDto: CreateResultadoDto) {
    return this.resultadosService.create(createResultadoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los Resultados' })
  findAll() {
    return this.resultadosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un resultado' })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.resultadosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un resultado' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateResultadoDto: UpdateResultadoDto,
  ) {
    return this.resultadosService.update(id, updateResultadoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un Resultado' })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.resultadosService.remove(id);
  }
}
