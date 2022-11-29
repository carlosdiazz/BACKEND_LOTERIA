import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
//import { AuthGuard } from '@nestjs/passport';

import { JuegoService } from './juego.service';
import { CreateJuegoDto, UpdateJuegoDto } from './juego.dto';
import { JwtAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { Public } from '../../../auth/decorators/public.decorator';

//@UseGuards(AuthGuard('jwt'))
@UseGuards(JwtAuthGuard)
@ApiTags('Juego')
@Controller('juego_sql')
export class JuegoController {
  constructor(private readonly juegoService: JuegoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un Juego' })
  create(@Body() createJuegoDto: CreateJuegoDto) {
    return this.juegoService.create(createJuegoDto);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Obtener todos los Juego' })
  findAll() {
    return this.juegoService.findAll();
  }

  @Public()
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
