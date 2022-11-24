import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { SorteoService } from './sorteo.service';
import { CreateSorteoDto, UpdateSorteoDto } from './sorteo.dto';

@ApiTags('Sorteo')
@Controller('sorteo_sql')
export class SorteoController {
  constructor(private readonly sorteoService: SorteoService) {}

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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sorteoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un Sorteo' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSorteoDto: UpdateSorteoDto,
  ) {
    return this.sorteoService.update(id, updateSorteoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un Sorteo' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sorteoService.remove(id);
  }
}
