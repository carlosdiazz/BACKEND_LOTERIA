import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Juego {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  abreviatura: string;

  @Prop({ required: true })
  img_url: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  posiciones: number;

  @Prop({ required: true })
  elementos: number;
}

export type juegoType = HydratedDocument<Juego>;

export const JuegoSchema = SchemaFactory.createForClass(Juego);
