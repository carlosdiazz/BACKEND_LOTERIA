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

import { JuegosService } from './juego.service';
import { CreateJuegoDto, UpdateJuegoDto } from './juego.dto';
import { ParseObjectIdPipe } from '../common/parseObjectIdMongo.pipe';

@ApiTags('Juego')
@Controller('juego')
export class JuegoController {
  constructor(private readonly juegoService: JuegosService) {}

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
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.juegoService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un Juego' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateJuegoDto: UpdateJuegoDto,
  ) {
    return this.juegoService.update(id, updateJuegoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un Juego' })
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.juegoService.remove(id);
  }
}
