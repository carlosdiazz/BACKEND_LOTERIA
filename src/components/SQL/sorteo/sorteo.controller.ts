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

import { JwtAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { SorteoService } from './sorteo.service';
import { CreateSorteoDto, UpdateSorteoDto } from './sorteo.dto';
import { Public } from '../../../auth/decorators/public.decorator';

//@UseGuards(AuthGuard('jwt'))
@UseGuards(JwtAuthGuard)
@ApiTags('Sorteo')
@Controller('sorteo_sql')
export class SorteoController {
  constructor(private readonly sorteoService: SorteoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un Sorteo' })
  create(@Body() createSorteoDto: CreateSorteoDto) {
    return this.sorteoService.create(createSorteoDto);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Obtener todos los Sorteo' })
  findAll() {
    return this.sorteoService.findAll();
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Obtener un Sorteo especifico' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sorteoService.findOne(id);
  }

  @Put(':id')
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
