import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LoteriasService } from './loteria.service';
import { LoteriasController } from './loteria.controller';
import { Loteria, LoteriaSchema } from './loteria.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Loteria.name,
        schema: LoteriaSchema,
      },
    ]),
  ],
  controllers: [LoteriasController],
  providers: [LoteriasService],
})
export class LoteriasModule {}
