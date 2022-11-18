import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoteriaService } from './loteria.service';
import { LoteriaController } from './loteria.controller';
import { Loteria } from './loteria.entity';

import { Juego } from '../juego/juego.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Loteria, Juego])],
  controllers: [LoteriaController],
  providers: [LoteriaService],
})
export class LoteriaModule {}
