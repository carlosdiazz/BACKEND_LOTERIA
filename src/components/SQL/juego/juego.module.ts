import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JuegoService } from './juego.service';
import { JuegoController } from './juego.controller';
import { Juego } from './juego.entity';

import { Loteria } from '../loteria/loteria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Juego, Loteria])],
  controllers: [JuegoController],
  providers: [JuegoService],
})
export class JuegoModuleSql {}
