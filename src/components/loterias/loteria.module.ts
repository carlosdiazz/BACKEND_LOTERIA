import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LoteriasService } from './loteria.service';
import { LoteriasController } from './loteria.controller';
import { Loteria, LoteriaSchema } from './loteria.entity';

import { Sorteo, SorteoSchema } from '../sorteos/sorteo.entity';
import { Resultado, ResultadoSchema } from '../resultados/resultado.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Loteria.name, schema: LoteriaSchema },
      { name: Sorteo.name, schema: SorteoSchema },
      { name: Resultado.name, schema: ResultadoSchema },
    ]),
  ],
  controllers: [LoteriasController],
  providers: [LoteriasService],
})
export class LoteriasModule {}
