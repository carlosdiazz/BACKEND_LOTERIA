import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { LoteriaService } from './loteria.service';
import { CreateLoteriaDto, UpdateLoteriaDto } from './loteria.dto';

@ApiTags('Loteria')
@Controller('loteria')
export class LoteriaController {
  constructor(private readonly loteriaService: LoteriaService) {}

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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.loteriaService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una Loteria especifica' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLoteriaDto: UpdateLoteriaDto,
  ) {
    return this.loteriaService.update(id, updateLoteriaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una Loteria especifica' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.loteriaService.remove(id);
  }
}
