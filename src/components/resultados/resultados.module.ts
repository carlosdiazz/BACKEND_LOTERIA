import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ResultadosService } from './resultados.service';
import { ResultadosController } from './resultados.controller';
import { Resultado, ResultadoSchema } from './resultado.entity';

import { Sorteo, SorteoSchema } from '../sorteos/sorteo.entity';
import { Loteria, LoteriaSchema } from '../loterias/loteria.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resultado.name, schema: ResultadoSchema },
      { name: Sorteo.name, schema: SorteoSchema },
      { name: Loteria.name, schema: LoteriaSchema },
    ]),
  ],
  controllers: [ResultadosController],
  providers: [ResultadosService],
})
export class ResultadosModule {}
