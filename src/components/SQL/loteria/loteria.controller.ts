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
import { AuthGuard } from '@nestjs/passport';

import { JwtAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../../auth/guards/roles.guard';

import { Role } from '../../../auth/models/roles.model';

import { LoteriaService } from './loteria.service';
import { CreateLoteriaDto, UpdateLoteriaDto } from './loteria.dto';
import { Public } from '../../../auth/decorators/public.decorator';
import { Roles } from '../../../auth/decorators/roles.decorator';
@UseGuards(AuthGuard('jwt'))
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Loteria')
@Controller('loteria_sql')
export class LoteriaController {
  constructor(private readonly loteriaService: LoteriaService) {}

  //@Roles(Role.ADMIN)
  @Post()
  @ApiOperation({ summary: 'Crear una Loteria' })
  create(@Body() createLoteriaDto: CreateLoteriaDto) {
    return this.loteriaService.create(createLoteriaDto);
  }

  @Get()
  @Public()
  @ApiOperation({ summary: 'Obtener todas las Loteria' })
  findAll() {
    return this.loteriaService.findAll();
  }

  @Get(':id')
  @Public()
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
