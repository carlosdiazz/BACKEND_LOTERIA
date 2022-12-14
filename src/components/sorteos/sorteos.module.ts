import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SorteosService } from './sorteos.service';
import { SorteosController } from './sorteos.controller';
import { Sorteo, SorteoSchema } from './sorteo.entity';

import { Juego, JuegoSchema } from '../juegos/juego.entity';
import { Loteria, LoteriaSchema } from '../loterias/loteria.entity';
import { Resultado, ResultadoSchema } from '../resultados/resultado.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sorteo.name, schema: SorteoSchema },
      { name: Juego.name, schema: JuegoSchema },
      { name: Loteria.name, schema: LoteriaSchema },
      { name: Resultado.name, schema: ResultadoSchema },
    ]),
  ],
  controllers: [SorteosController],
  providers: [SorteosService],
})
export class SorteosModule {}
