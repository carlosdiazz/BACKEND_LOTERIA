import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { config, validationENV } from '../config/config';

//! Componentes con SQL
import { DatabseModule } from '../database/SQL/database.sql.module';
import { LoteriaModule } from '../components/SQL/loteria/loteria.module';
import { SorteoModule } from '../components/SQL/sorteo/sorteo.module';
import { JuegoModule } from '../components/SQL/juego/juego.module';

//! Componentes con MONGO
//import { MongoModule } from '../database/mongo.module';
//import { LoteriasModule } from '../components/loterias/loteria.module';
//import { JuegosModule } from '../components/juegos/juego.module';
//import { ResultadosModule } from '../components/resultados/resultados.module';
//import { SorteosModule } from '../components/sorteos/sorteos.module';

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

    //MongoModule,
    //LoteriasModule,
    //JuegosModule,
    //ResultadosModule,
    //SorteosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
