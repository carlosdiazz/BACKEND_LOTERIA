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

import { JuegoService } from './juego.service';
import { CreateJuegoDto, UpdateJuegoDto } from './juego.dto';

@ApiTags('Juego')
@Controller('juego_sql')
export class JuegoController {
  constructor(private readonly juegoService: JuegoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un Juego' })
  create(@Body() createJuegoDto: CreateJuegoDto) {
    return this.juegoService.create(createJuegoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los Juego' })
  findAll() {
    return this.juegoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obetner un Juego especifico' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.juegoService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un Juego' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateJuegoDto: UpdateJuegoDto,
  ) {
    return this.juegoService.update(id, updateJuegoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un Juego' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.juegoService.remove(id);
  }
}
