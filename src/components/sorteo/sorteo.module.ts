import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SorteoService } from './sorteo.service';
import { SorteoController } from './sorteo.controller';
import { Sorteo } from './sorteo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sorteo])],
  controllers: [SorteoController],
  providers: [SorteoService],
})
export class SorteoModule {}
