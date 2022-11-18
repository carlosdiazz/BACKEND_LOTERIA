import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { Juego } from '../juegos/juego.entity';
import { Loteria } from '../loterias/loteria.entity';

@Schema({ timestamps: true })
export class Sorteo {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  abreviatura: string;

  @Prop({ required: true })
  img_url: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true, type: Types.ObjectId, ref: Juego.name })
  id_juego: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: Loteria.name })
  id_loteria: Types.ObjectId;
}

export type sorteoType = HydratedDocument<Sorteo>;

export const SorteoSchema = SchemaFactory.createForClass(Sorteo);
