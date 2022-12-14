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

import { SorteosService } from './sorteos.service';
import { CreateSorteoDto, UpdateSorteoDto } from './sorteo.dto';
import { ParseObjectIdPipe } from '../common/parseObjectIdMongo.pipe';

@ApiTags('Sorteo')
@Controller('sorteo')
export class SorteosController {
  constructor(private readonly sorteoService: SorteosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un Sorteo' })
  create(@Body() createSorteoDto: CreateSorteoDto) {
    return this.sorteoService.create(createSorteoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los Sorteo' })
  findAll() {
    return this.sorteoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un Sorteo especifico' })
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.sorteoService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un Sorteo' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateSorteoDto: UpdateSorteoDto,
  ) {
    return this.sorteoService.update(id, updateSorteoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un Sorteo' })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.sorteoService.remove(id);
  }
}
