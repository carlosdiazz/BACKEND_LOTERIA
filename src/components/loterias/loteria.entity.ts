import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({timestamps: true})
export class Loteria {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true })
    abreviatura: string;

    @Prop({ required: true })
    img_url: string;

    @Prop({ required: true })
    descripcion: string;
}

export type loteriaType = HydratedDocument<Loteria>;

export const LoteriaSchema = SchemaFactory.createForClass(Loteria);
