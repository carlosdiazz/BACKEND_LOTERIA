import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { JuegosService } from './juego.service';
import { JuegoController } from './juego.controller';
import { Juego, JuegoSchema } from './juego.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Juego.name, schema: JuegoSchema }]),
  ],
  controllers: [JuegoController],
  providers: [JuegosService],
})
export class JuegosModule {}
