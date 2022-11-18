import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { Loteria } from '../loterias/loteria.entity';
import { Sorteo } from '../sorteos/sorteo.entity';

@Schema({ timestamps: true })
export class Resultado {
  @Prop({ required: true, unique: true, type: Date })
  date: Date;

  @Prop({ required: true, type: Types.ObjectId, ref: Sorteo.name })
  id_sorteo: string;

  @Prop({ required: true, type: Types.ObjectId, ref: Loteria.name })
  id_loteria: string;

  @Prop({ required: true })
  numeros_ganadores: number[];
}

export type resultadoType = HydratedDocument<Resultado>

export const ResultadoSchema = SchemaFactory.createForClass(Resultado);