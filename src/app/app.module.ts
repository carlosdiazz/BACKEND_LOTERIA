import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { config, validationENV } from '../config/config';

import { DatabseModule } from '../database/databse.module';
import { LoteriaModule } from '../components/loteria/loteria.module';
import { SorteoModule } from '../components/sorteo/sorteo.module';
import { JuegoModule } from '../components/juego/juego.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      validationSchema: validationENV(),
    }),
    DatabseModule,
    LoteriaModule,
    SorteoModule,
    JuegoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
